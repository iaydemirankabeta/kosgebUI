import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_fake/fake-data';
import { AuthService, UserModel } from 'src/app/modules/auth';
import { UserCompany } from 'src/app/modules/auth/models/user-company.model';
import { CompanyChoiceService } from './company-choice.service';
import { first, map } from 'rxjs';
@Component({
  selector: 'app-company-choice',
  templateUrl: './company-choice.component.html',
  styleUrls: ['./company-choice.component.scss']
})
export class CompanyChoiceComponent {
  myCompanies : UserCompany[] = [];
  user: UserModel | undefined;
  constructor(private dataService: DataService,private auth:AuthService,private router: Router,private companyChoiceService: CompanyChoiceService){

    this.myCompanies = auth.currentUserValue?.userCompanies || [];
    this.user = auth.currentUserValue;

  }

  click(id:string){
    this.companyChoiceService.CompanySelect(id,this.user!).pipe(
      first()
    ).subscribe((apiData:any) => {
      if(this.user){
        this.user.firstname = apiData.data.user.name;
        this.user.fullname = apiData.data.user.name;
        this.user.id = apiData.data.user.id;
        this.user.authToken = apiData.data.token;
        this.user.userMenus= apiData.data.menus;
        this.user.selectedCompany = this.myCompanies.filter(x => x.company.id === id)[0];
      }
      this.auth.currentUserSubject.next(this.user);
      this.auth.setAuthFromLocalStorage(this.user!)
      this.router.navigate(["anasayfa"]);
    });

  }
}
