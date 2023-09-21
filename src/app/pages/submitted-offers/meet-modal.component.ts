import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RandevuService } from './randevu.service';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'meet-modal',
  template: `
  <style>
    .call-tick{
    font-size: 55px;
    width: 80px;
    height: 80px;
    padding-top: 10px;
    background-color: #27ae60;
    border-radius: 45px;
    color:white;
    margin-bottom:10px;
  }
  </style>
    <div class="modal-header">
      <h4 class="modal-title">Randevu Oluştur</h4>
      <button type="button" class="close" (click)="closeModal()">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Seçilen Tarih: {{ selectedDate | date }}</p>
      <p>Boş Saatler:</p>
      <div class="radio-buttons">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let emptyHour of emptyHours">
            <label class="radio-label">
              <input type="radio" name="selectedHour" [value]="emptyHour" [(ngModel)]="selectedHour">
              {{ emptyHour }}
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="createAppointment()">Randevu Oluştur</button>
      <button type="button" class="btn btn-secondary" (click)="closeModal()">Kapat</button>
    </div>
    <app-modal #successRandevu [modalConfig]="modalsuccesRandevu" aria-modal="true">
        <div class="col-xs-12 text-center">
          <i class="fa-solid fa-check call-tick"></i>
          <h3>Tebrikler</h3>
          <p>Randevunuz oluştu</p>
          
        </div>
      </app-modal>
  `,
})
export class AppModalComponent {
  @Input() selectedDate: Date;
  emptyHours: string[] = [];
  selectedHour: string;
  constructor(public activeModal: NgbActiveModal, public randevuService: RandevuService
    
    ) {}

    @ViewChild('successRandevu') private successRandevuModal:ModalComponent

    modalsuccesRandevu: ModalConfig = {
      modalTitle: "Randevu Oluşturuldu",
      closeButtonLabel:'Kapat',
      hideCloseButton:() => true
    }; 
  

  ngOnInit() {
    this.findEmptyHours();
  }

  closeModal() {
    this.activeModal.close('Modal kapatıldı');
  }

  createAppointment() {
    if (this.selectedHour) {
      const randevuTarihi = new Date(this.selectedDate);
      randevuTarihi.setHours(parseInt(this.selectedHour.split(':')[0], 10));
      randevuTarihi.setMinutes(parseInt(this.selectedHour.split(':')[1], 10));
      this.randevuService.randevuOlustur(randevuTarihi);
      this.successRandevuModal.open();
    }

   
    this.closeModal();

  }

  findEmptyHours() {
    const randevuVerileri = this.randevuService.getRandevuVerileri();
    const startHour = 9;
    const endHour = 18;

    const doluTarihler = randevuVerileri
      .filter((appointment) => appointment.dolu)
      .map((appointment) => appointment.tarih.toDateString());

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour.toString().padStart(2, '0') + ':00';
      const tarihString = this.selectedDate.toDateString();
      const isHourOccupied = doluTarihler.includes(tarihString + ' ' + formattedHour);

      if (!isHourOccupied) {
        this.emptyHours.push(formattedHour);
      }
    }
  }
}
