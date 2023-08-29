export interface UserCompany{
    company:Company,
    roles: Number[],
    occupation:string
}
export interface Company{
    id:Number;
    name: string;
    img:{ url: string };
    type:CompanyTypes
}

export enum CompanyTypes{
    BI=1,
    KOBI=2
}