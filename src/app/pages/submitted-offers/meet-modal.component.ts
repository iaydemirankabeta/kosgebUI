import { Component, Input } from '@angular/core';
import { RandevuService } from './randevu.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'meet-modal',
  template: `
    <div class="modal-header">
  <h4 class="modal-title">Randevu Oluştur</h4>
  <button type="button" class="close" (click)="closeModal()">
    <span>&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>Seçilen Tarih: {{ selectedDate  | date }}</p>
  <p>Boş Saatler:</p>
  <div class="radio-buttons">
    <ul class="list-group">
    <li class="list-group-item" *ngFor="let emptyHour of emptyHours">
    <label  class="radio-label">
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
  `
})
export class AppModalComponent {
  @Input() selectedDate: Date;
  emptyHours: string[] = [];
  selectedHour: string;

  constructor(public activeModal: NgbActiveModal,public randevu:RandevuService) {}

  ngOnInit() {
    this.findEmptyHours();
  }

  closeModal() {
    this.activeModal.close('Modal kapatıldı');
  }

  createAppointment() {
    // Randevu oluşturma işlemi burada yapılabilir
    // Örneğin, seçilen tarih ve saati kullanarak veri tabanına eklemek
    if (this.selectedHour) {
      // Seçilen tarih ve saati kullanarak randevu oluşturma işlemi burada yapılabilir
      const randevuTarihi = new Date(this.selectedDate);
      randevuTarihi.setHours(parseInt(this.selectedHour.split(':')[0], 10));
      randevuTarihi.setMinutes(parseInt(this.selectedHour.split(':')[1], 10));
      this.randevu.randevuOlustur(randevuTarihi);
    }
    this.closeModal();
  }

  findEmptyHours() {
    // Boş saatleri bulmak için randevu verilerini alın
    const randevuVerileri = this.randevu.getRandevuVerileri();

    // Saat aralığında boş saatleri bulun
    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour.toString().padStart(2, '0') + ':00';
      const isHourOccupied = randevuVerileri.some(appointment => {
        const appointmentDate = appointment.tarih;
        const appointmentHour = appointment.saat;
        return (
          appointmentDate.toDateString() === this.selectedDate.toDateString() &&
          appointmentHour === formattedHour &&
          appointment.dolu
        );
      });

      if (!isHourOccupied) {
        this.emptyHours.push(formattedHour);
      }
    }
  }
  

}
