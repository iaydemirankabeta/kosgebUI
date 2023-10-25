import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})




export class NotificationComponent {

  notifications: string[] = [
    'Yeni bir e-posta geldi.',
      'Toplantı hatırlatıcısı: Bugün saat 14:00\'de toplantınız var.',
      'Hava durumu güncellemesi: Yarın yağmurlu olacak.',
      'Hoş geldin! Yeni üyelik oluşturuldu.',
      'Sistem güncellemesi başarıyla tamamlandı.'
  ];

  constructor() {

  }
  

}
