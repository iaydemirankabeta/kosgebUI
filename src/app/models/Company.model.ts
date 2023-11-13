import { AddressModel } from "../modules/auth/models/address.model";
import { CompanyTypes } from "../modules/auth/models/user-company.model";

export interface Company {
    id:Number;
    img:{ url: string };
    title:string;
    type:CompanyTypes
    sectorInfo:string;
    adress:AddressModel
    personelInfo:{
        office:Number,
        field:Number
    };
    incomes:Income[];
    IDR:IDR[];
    Orders:OrderYear[];
}

export interface Income{
    type:string;
    value:string;
}

export interface IDR{
    year:string;
    value:string;
}

export interface OrderYear{
    year:string;
    value:string
}