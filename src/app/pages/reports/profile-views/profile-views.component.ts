import { Component } from '@angular/core';
import { ProfileViewsService } from './profile-views.service';


@Component({
  selector: 'app-profile-views',
  templateUrl: './profile-views.component.html',
  styleUrls: ['./profile-views.component.scss']
})
export class ProfileViewsComponent {
  profilGoruntulemeler: any[];

  constructor(private profilGoruntulemeService: ProfileViewsService) { }

  ngOnInit(): void {
    this.profilGoruntulemeService.getProfilGoruntulemeler().subscribe(data => {
      this.profilGoruntulemeler = data;
    });
  }
}
