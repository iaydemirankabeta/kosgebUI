
export interface MenuItem {
  title: string;
  icon?: string;
  routerLink?: string;
  subMenu?: subMenu[];
  roles: number[];
}

export interface subMenu{
  title: string;
  icon?:string;
  routerLink ?: string;
  subMenu ?: subMenu[];
}
