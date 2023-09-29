import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meet-plan',
  templateUrl: './meet-plan.component.html',
  styleUrls: ['./meet-plan.component.scss']
})
export class MeetPlanComponent {

  @ViewChild('toplantiForm') toplantiForm: NgForm; // NgForm nesnesini tanımlayın


  toplanti = {
    adi: '',
    konu: '',
    tarih: '',
    saat: '',
    link: '',
    katilimci: '',
    kvkk: '',
    firma: ''
  };

  constructor() {}

  toplantiKaydet() {
    if (this.toplantiForm.invalid) {
      // Form geçerli değil, işlem yapmayın
      return;
    }

    // Form geçerli, burada form verilerini işleyebilirsiniz
    console.log('Toplanti kaydedildi:', this.toplanti);
    // İsterseniz veriyi bir API'ye gönderebilirsiniz.

    // Formu sıfırlayın
    this.resetForm();
  }

  resetForm() {
    // Form verilerini sıfırlayın
    this.toplanti = {
      adi: '',
      konu: '',
      tarih: '',
      saat: '',
      link: '',
      katilimci: '',
      kvkk: '',
      firma: ''
    };
    this.toplantiForm.resetForm(this.toplanti);

  }

  yeniKatilimci = '';
  katilimcilar: string[] = [];


  katilimciEkle() {
    if (this.yeniKatilimci.trim() !== '') {
      this.katilimcilar.push(this.yeniKatilimci.trim());
      this.yeniKatilimci = ''; // Yeni katılımcıyı sıfırla
    }
  }

  katilimciKaldir(index: number) {
    this.katilimcilar.splice(index, 1);
  }

}
