export interface UserCompany{
    company:Company,
    roles: UserRoles[],
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
    KOBI=2,
    KOSGEB=3,
    Muadil=4,
    ADMIN = 5
}

export enum UserRoles{
    User=1,
    Admin=2,
    KosgebAdmin=3,
    KosgebUser=4
}