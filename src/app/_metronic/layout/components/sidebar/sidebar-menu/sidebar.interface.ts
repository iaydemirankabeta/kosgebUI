import { CompanyTypes } from "src/app/modules/auth/models/user-company.model";

export interface MenuItem {
  title: string;
  icon?: string;
  routerLink?: string;
  subMenu?: subMenu[];
  roles: number[];
  disabled:boolean;
  companyTypes?:CompanyTypes[];
  shown:boolean;
}

export interface subMenu{
  title: string;
  icon?:string;
  routerLink ?: string;
  subMenu ?: subMenu[];
}
