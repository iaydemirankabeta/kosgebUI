
export interface MenuItem {
  title: string;
  icon?: string;
  routerLink?: string;
  subMenu?: subMenu[];
}

export interface subMenu{
  title: string;
  icon?:string;
  routerLink ?: string;
  subMenu ?: subMenu[];
}
