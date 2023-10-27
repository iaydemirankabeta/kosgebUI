import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})




export class NotificationComponent {

  notifications: string[] = [
    'X işletmesi 25.10.2023 tarihinde şanzıman için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 9001 Belgeni profiline yükle!',
      'Y işletmesi 26.10.2023 tarihinde buji için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesini profiline ekle!',
      'Z işletmesi 26.10.2023 tarihinde buji için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesini profiline ekle!',
      'A işletmesi 26.10.2023 tarihinde buji için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesini profiline ekle!',
      'B işletmesi 26.10.2023 tarihinde buji için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesini profiline ekle!',
      'C işletmesi 26.10.2023 tarihinde buji için arama yaptı. Büyük işletmeler tarafından daha fazla fark edilmek istiyorsan ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Belgesini profiline ekle!'
  ];

  constructor() {

  }
  

}
