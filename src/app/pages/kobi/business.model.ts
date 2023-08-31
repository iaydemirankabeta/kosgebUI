export interface Business {
    id: number;
    name: string;
    type: string;
    category: string;
    employeeCount: string;
    location: string;
    company: string;
    chart: boolean;
    group: boolean;
    users: boolean;
    pin: boolean;
    companyInfo: CompanyInfo[];
  }
  
  export interface CompanyInfo {
    name: string;
    ciro: string;
    worker: string;
    code: string;
    location: string;
    sektor: string;
    description: string;
  }
  