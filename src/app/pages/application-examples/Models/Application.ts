export interface Application{
    BI: string;
    KOBI:string;
    sector:string;
    applicationDate:Date
    peroid:number
}
export interface ApplicationFilter{
    startDate:Date;
    endDate:Date;
    sector:Sector
}

export interface Sector{
    name:string;
}