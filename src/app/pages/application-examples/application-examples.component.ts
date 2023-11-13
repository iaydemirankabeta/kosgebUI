import { Component } from '@angular/core';
import { Application, Sector } from './Models/Application';
import { ApplicationExamplesService } from './application-examples.service';

@Component({
  selector: 'app-application-examples',
  templateUrl: './application-examples.component.html',
  styleUrls: ['./application-examples.component.scss']
})
export class ApplicationExamplesComponent {
  applications : Application[];
  sectors : Sector[];
  selectedSector: Sector = {name:""};
  startDate:Date = new Date(1991,1);
  endDate:Date = new Date();
  constructor(private applicationService:ApplicationExamplesService){
    this.applications = applicationService.getApplications();
    console.log(this.applications)
  }

  setSelectedSector(event:any){
    this.selectedSector = {name:event.target.value}
    this.getApplicationsByFilter();
  } 
  startDateChange(item:any){
    this.startDate = new Date(item.target.value)
    console.log(this.startDate)
    this.getApplicationsByFilter();
  }

  endDateChange(item:any){
    this.startDate =  new Date(item.target.value)
    console.log(this.endDate)

    this.getApplicationsByFilter();
  }
  setDate(startDate : Date, endDate: Date){
    this.startDate = startDate;
    this.endDate = endDate;
    this.getApplicationsByFilter();
  }

  getApplicationsByFilter(){
    this.applications = this.applicationService.getApplications({sector:this.selectedSector,startDate:this.startDate, endDate:this.endDate})
  }
}
