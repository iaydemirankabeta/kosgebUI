
export interface ContactDTO {
    id?:string
    userId?:string
    name?:string;
    companyId?:string
    eMail?:string
    title?:string
    department?:string
    companyName?:string
    contactUserId?:string
}

export interface GetContactDTO{
    id?:string
    userId?:string
    companyId?:string
    page?:number;
    count?:number;
    columnName?:string;
    isDesc?:boolean;
    search?:string;
}

export interface Paging{
    page?:number;
    pageSize?:number;
    pageCount?:number;
    totalCount?:number;
}

export interface Contact{
    id?:string;
    eMail?:string
    name?:string
    title?:string
    department?:string
    companyName?:string
    contactUserId?:string
    contactUser?:AppUser;
}

export interface AppUser{
    id?:string
    unvan?:string;
    name?:string;
    birim?:string;
    eMail?:string;
}