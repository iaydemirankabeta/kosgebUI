
export interface MenuItem {
  title: string;
  icon?: string;
  routerLink?: string;
  subMenu?: subMenu[];
  roles: number[];
  disabled:boolean;
}

export interface subMenu{
  title: string;
  icon?:string;
  routerLink ?: string;
  subMenu ?: subMenu[];
}
