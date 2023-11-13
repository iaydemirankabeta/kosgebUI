import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-widget7',
  templateUrl: './cards-widget7.component.html',
  styleUrls: ['./cards-widget7.component.scss'],
})
export class CardsWidget7Component implements OnInit {
  @Input() cssClass: string = '';
  @Input() icon: boolean = false;
  @Input() stats: number = 357;
  @Input() description: string = 'Personel';
  @Input() labelColor: string = 'dark';
  @Input() textColor: string = 'gray-300';
  items: Array<{ name: string; initials?: string; state?: string, src?: string }>;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { name: 'Emrullah ', initials: 'A', state: 'warning' },
      { name: 'Hasan Oruç', src: './assets/media/avatars/300-11.jpg' },
      { name: 'Doğukan ', initials: 'S', state: 'primary' },
      { name: 'Ender', src: './assets/media/avatars/300-2.jpg' },
    ];
  }
}
