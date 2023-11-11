import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_fake/fake-data';
import { UserCompany } from 'src/app/modules/auth/models/user-company.model';
import { UserModel } from 'src/app/modules/auth/models/user.model';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() appHeaderDefaulMenuDisplay: boolean;
  @Input() isRtl: boolean;

  itemClass: string = 'ms-1 ms-lg-3';
  btnClass: string = 'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px';
  userAvatarClass: string = 'symbol-35px symbol-md-40px';
  btnIconClass: string = 'fs-2 fs-md-1';

  myCompanies : UserCompany[] = [];
  user: UserModel | undefined;
  selectedValue : string ;
  constructor(private dataService: DataService,private auth:AuthService,private router: Router){
    this.user = auth.currentUserValue;
    this.selectedValue = this.user?.selectedCompany?.company.id || "";
    this.myCompanies = auth.currentUserValue?.userCompanies || [];
  }

  click(event:any){
    this.user ? this.user.selectedCompany = this.myCompanies.filter(x => x.company.id ===(event.target.value))[0] : null;
    this.auth.currentUserSubject.next(this.user);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard']);
  }); 
  }

  ngOnInit(): void {}
}
