export interface GetDemandCallsModel{
    demandCallId:string,
    sectorId:string,
    sectorName:string,
    endDate:string,
    demandCallCompanyList: demandCallCompanyListDTO[],

}
export interface demandCallCompanyListDTO{
    companyId?: string,
    productId?: string,
    totalCompanyAmount: number,
    totalProductAmount: number,
    productAmount: number,
    productName: string;
    companyName: string,
}