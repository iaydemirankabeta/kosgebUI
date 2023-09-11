import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_fake/fake-data';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { UserCompany } from 'src/app/modules/auth/models/user-company.model';
@Component({
  selector: 'app-company-choice',
  templateUrl: './company-choice.component.html',
  styleUrls: ['./company-choice.component.scss']
})
export class CompanyChoiceComponent {
  myCompanies : UserCompany[] = [];
  user: UserModel | undefined;
  constructor(private dataService: DataService,private auth:AuthService,private router: Router){

    this.myCompanies = auth.currentUserValue?.userCompanies || [];
    this.user = auth.currentUserValue;

  }

  click(id:Number){
    this.user ? this.user.selectedCompany = this.myCompanies.filter(x => x.company.id === id)[0] : null;
    this.auth.currentUserSubject.next(this.user);
    this.router.navigate(["dashboard"]);
  }



}
