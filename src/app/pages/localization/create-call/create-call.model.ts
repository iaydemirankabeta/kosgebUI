export interface GetLocalizationInsertResponse2 {
    companyId: string;
    // factories: FactoryDTO[];//fabrikalar
    Sectors: SectorDTO[];//Sektörler
    CertificationDocumnets: CertificationDocumentDTO[];// Sertifika ve Belgeler
    NACECode: NACECodeDTO[];// işletme faaliyet yeri - İller dönülecek.
    SupplierType: SupplierTypeDTO[];//Tedarikçi Tipi
    GTIPList: GTIPDTO[];
    StatisticalRegions: StatisticalRegionDTO[];
}
//Company Adress
export interface companyAddressesDTO {
    id: string,
    name: string

}
// //fabrikalar
// export interface FactoryDTO {
//     Id:string;
//     companyId: string;
//     name: string;
//     businessLocation: {//çok kullanmayacağımız için burada yaptık diğer türlü DTO şeklinde yapılacaktı
//         latitude: Number,
//         longitude: Number
//     }[]
// }

//Sektörler
export interface SectorDTO {
    sectorId: string;
    sectocompanyIdrId: string;
    name: string;
    sectorType: string;
}
// Sertifika ve Belgeler
export interface CertificationDocumentDTO {
    companyId: string,
    certificationDocumentId: string,
    name: string;
}
// işletme faaliyet yeri - İller dönülecek.
export interface NACECodeDTO {
    naceCodeId: string,
    naceCode4: string,
    naceCode6: string,
}
//Tedarikçi Tipi
export interface SupplierTypeDTO {
    companyId: string,
    supType: string
}
export interface GTIPDTO {
    gtipId: string,
    code: string,
    name: string;
}
// export interface StatisticalRegionDTO {
//     cityId: string,
//     level1Code: string,
//     level1Name: string,
//     level2Cities: CitiesDTO[];
// }
export interface StatisticalRegionDTO {
    regionId: string,
    code: string,
    parentCode: string,
    cityCode: string;
}
export interface CitiesDTO {
    id:string,
    recordStatu: number,
    createdDate: Date,
    changedDate: Date,
    deletedDate: Date,
    createdAppUserId:string,
    changedAppUserId:string,
    deletedAppUserId:string,
    cityName: string,
    cityCode: number,
    countryId: string,
    longitude: 0,
    latitude: 0,
    districts:districtsDTO[];
}
export interface districtsDTO{
    id: string,
    recordStatus: number,
    createdDate: Date,
    changedDate: Date,
    deletedDate: Date,
    createdAppUserId: string,
    changedAppUserId: string,
    deletedAppUserId: string,
    name: string,
    districtCode: number,
    cityName: string,
    cityCode: number,
    city: string,
    longitude: number,
    latitude: number

}

export interface GetLocalizationInsertResponse {
    success: boolean;
    status: number;
    resultDescriptionList: string[];
    exceptionList: string[];
    dataList: {
        companyAddresses?: companyAddressesDTO[];
        // factories?: FactoryDTO[];
        sectors?: SectorDTO[];
        certificationDocumnets?: CertificationDocumentDTO[];
        naceCode?: NACECodeDTO[];
        supplierType?: SupplierTypeDTO[];
        gtipList?: GTIPDTO[];
        statisticalRegions?: StatisticalRegionDTO[];
       

    }[],
    data:{
        // factories: FactoryDTO[];
        companyAddresses: companyAddressesDTO[];
        sectors: SectorDTO[];
        certificationDocumnets: CertificationDocumentDTO[];
        naceCode: NACECodeDTO[];
        supplierType: SupplierTypeDTO[];
        gtipList: GTIPDTO[];
        statisticalRegions: StatisticalRegionDTO[];
    }
}
export interface GetLocalizationModel {
    id: string;
    approvalStatus: ApprovalStatus;
    offerCount: number;
    sectorName: string;
    localizationName: string;
    keywords: string;
    productName: string | null;
    companyId: string;
    productId: string | null;
    gtip: string | null;
    proTr: string | null;
    weight: number | null;
    height: number | null;
    description: string;
    pictureUrl: string | null;
    videoUrl: string | null;
    gtipCode: string | null;
    protTr: string | null;
    count: number | null;
    isQuestionable: boolean;
    sectorId: string;
    endDate: string | null;
    frequentlyAskedQuestionsList: LocalizationQuestionModel[];
    kobiAskedQuestionsList: LocalizationQuestionModel[];
    localizationExpectationList: LocalizationExpectationModel[];
}

export interface LocalizationQuestionModel {
    id: string;
    question: string;
    answer: string;
    localizationId: string;
    companyId: string;
    isFrequentlyQuestion: boolean;
}

export interface LocalizationExpectationModel {
    localizationId: string;
    expectationNote: string;
    description: string;
}
//Kobinin yerelleştirmeye başvurusu :Api/Localization/CreateLocalizationDeal
export interface Requestbody 
{

  firstName: string,
  lastName: string,
   companyId : string,
  companyContactPersonId: string,
  localizationId: string,
  title: string,
  description: string
}
//Api/Localization/ChangeLocalizationStatus
export interface ChangeLocalizationStatusModel {
    approvalStatus: number;
    recordStatus: number;
    localizationId: string;
}
export enum ApprovalStatus{
    /// <summary>
/// İstek Kosgeb'e iletildi.
/// </summary>
RequestSend = 1,
/// <summary>
/// Taslak durum
/// </summary>
Draft = 2,
/// <summary>
/// İstek onaylandı
/// </summary>
RequestApproved = 3,
/// <summary>
/// Reddedildi
/// </summary>
RequestRejected = 4,
/// <summary>
/// Kosgeb tarafından revizesi istendi
/// </summary>
SentForRevision = 5,

}

// export class SelectConfig {
//   itemType?: string;
//   items?: any[];
//   defaultValue?: string;
//   bindValue?: string;
//   bindLabel?: string = "Label";
//   required?: boolean = false;
//   disabled?: boolean = false;
//   readonly?: boolean = false;
//   multiple?: boolean = false;
//   searchable?: boolean = true;
//   closeOnSelect?: boolean = true;
//   horizontal?: boolean = true;
//   clearable?: boolean = true;
//   addAll?: boolean = false;
//   selected?: boolean = false;
//   placeholder?: string = 'Seçiniz';
//   isAddId?: boolean = false;
// }
// //multiselect
// export class SelectItem {
//   Id: any;
//   Label: string;
// }
// export class SelectItemString {
//   Id: string;
//   Label: string;
// }
// export class SelectTask {
//   Id: string;
//   Label: string;
//   Hour: string;
// }

