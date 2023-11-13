import { Component, OnInit } from '@angular/core';
import { MenuItem, subMenu } from './sidebar.interface';
import { Observable } from 'rxjs';

import { AuthService, UserModel, UserType } from 'src/app/modules/auth';
import { CompanyTypes, UserRoles } from 'src/app/modules/auth/models/user-company.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})


export class SidebarMenuComponent implements OnInit {
  menuItems:MenuItem[] = [];
  user$: Observable<UserType>;
  user: UserModel | undefined;
  constructor(
    private auth: AuthService,
  ) {

  }


  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.user = this.auth.currentUserValue;
    let menus = this.user?.userMenus?.filter(x => x.upperMenuId === "0");
    menus?.forEach(menu => {
      let subMenusModel = this.user?.userMenus?.filter(x => x.upperMenuId === menu.id);
      let subMenus:subMenu[] = [];
      subMenusModel?.forEach(subMenu => {
        subMenus.push({
          title:subMenu.displayName,
          routerLink: subMenu.endpoint,
        })
      });
      this.menuItems.push({
        title : menu.displayName,
        icon : menu.icon,
        routerLink:menu.endpoint,
        disabled:false,
        shown:true,
        subMenu :subMenus.length > 0 ? subMenus : undefined
      })
    })
  }


}
