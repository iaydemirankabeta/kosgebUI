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
      <h4 class="modal-title">Müsaitlik Durumu</h4>
      <button type="button" class="close" (click)="closeModal()">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Seçilen Tarih: <span *ngFor="let selected of selectedDate">{{selected.toLocaleDateString()}} </span></p>
      <div class="mt-4">
        <label>Görüşme Şekli</label>
        <select class="form-control">
          <option>Online</option>
          <option>Yüz yüze</option>
        </select>
      </div>
      
      <div class="mt-4">
        <label>Temsilciler</label>
        <div class="mt-4">
          <button class="btn btn-primary" (click) = "counterUpdate()">Katılımcı Ekle</button>
        </div>
        <div  *ngFor="let counter of counters" class="mt-2">
          <input class="form-control" type=input />
        </div>
      </div>

      <p class="mt-4">Boş Saatler:</p>
      <div class="radio-buttons">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let emptyHour of emptyHours">
            <label class="radio-label">
              <input type="checkbox" [value]="emptyHour">
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
          <p>KOSGEB'e Görüşme Talebiniz iletildi</p>
          
        </div>
      </app-modal>
  `,
})
export class AppModalComponent {
  @Input() selectedDate: Date[];
  emptyHours: string[] = [];
  selectedHour: string[];
  counters:number[]=[1];
  constructor(public activeModal: NgbActiveModal, public randevuService: RandevuService

  ) { }

  @ViewChild('successRandevu') private successRandevuModal: ModalComponent

  modalsuccesRandevu: ModalConfig = {
    modalTitle: "Randevu Oluşturuldu",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };


  ngOnInit() {
    this.findEmptyHours();
  }

  closeModal() {
    this.activeModal.close('Modal kapatıldı');
  }

  createAppointment() {
    // if (this.selectedHour) {
    //   this.selectedHour.forEach((hour) => {
    //     this.selectedDate.forEach((date) => {
    //       const randevuTarihi = new Date(date);
    //       randevuTarihi.setHours(parseInt(hour.split(':')[0], 10));
    //       randevuTarihi.setMinutes(parseInt(hour.split(':')[1], 10));
    //       this.randevuService.randevuOlustur(randevuTarihi);
    //     });
    //   });
    //   this.successRandevuModal.open();
    // }

    this.successRandevuModal.open();
    this.closeModal();

  }

  counterUpdate(){
    this.counters.push(this.counters.length+1);
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
      this.emptyHours.push(formattedHour);
    }
  }
}
