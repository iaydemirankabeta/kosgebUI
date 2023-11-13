import { Injectable } from '@angular/core';
import { Application, ApplicationFilter, Sector } from './Models/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationExamplesService {
  applications : Application[]=[
    {
      BI : "Borusan",
      KOBI : "Selvi Teknoloji",
      sector : "Teknoloji",
      applicationDate : new Date("09-03-2023"),
      peroid:5
    },
    {
      BI : "Ekoten",
      KOBI : "B2Metric",
      sector : "İnşaat",
      applicationDate : new Date("08-09-2023"),
      peroid:5
    },
    {
      BI : "Pınar Online",
      KOBI : "Basefy",
      sector : "Hububat",
      applicationDate : new Date("06-06-2023"),
      peroid:5
    },
    {
      BI : "Organik Kimya",
      KOBI : "Cyberwise",
      sector : "Kimya",
      applicationDate : new Date("03-08-2023"),
      peroid:5
    },
    {
      BI : "Teksan",
      KOBI : "Metapax-Miltron",
      sector : "Tekstil",
      applicationDate : new Date("04-04-2023"),
      peroid:5
    },
    {
      BI : "Borusan",
      KOBI : "Uygun Malzeme",
      sector : "Otomotiv",
      applicationDate : new Date("02-05-2023"),
      peroid:5
    }
  ]
  sectors : Sector[] = [
    {name:"Tekstil"},
    {name:"Kimya"},
    {name:"Otomotiv"},
    {name:"Hububat"},
    {name:"İnşaat"},
    {name:"Teknoloji"}
  ];
  constructor() { }
  public getApplications(filter:ApplicationFilter|null =null){
    if(filter == null)
      return this.applications
    else{
      console.log(filter.endDate,filter.startDate)
      this.applications.map(x => console.log(x.applicationDate, filter.endDate, filter.startDate))
      var filteredApplications = this.applications.filter(x => x.applicationDate.getTime() < filter.endDate.getTime()  && x.applicationDate.getTime()  > filter.startDate.getTime() );
      return filter.sector.name !== "" ? filteredApplications.filter(x => x.sector === filter.sector.name) : filteredApplications
    }
  }

  public getSectors(){
    return this.sectors;
  }

}
