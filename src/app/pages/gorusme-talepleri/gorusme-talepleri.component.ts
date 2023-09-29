import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
export interface request{
  id:number;
  BI:string;
  callName:string;
  applications:application[];
}
export interface application{
  id:number;
  KOBI:string;
}
@Component({
  selector: 'app-gorusme-talepleri',
  templateUrl: './gorusme-talepleri.component.html',
  styleUrls: ['./gorusme-talepleri.component.scss']
})
export class GorusmeTalepleriComponent {
  displayedColumns: string[] = ['Id', 'BI', 'CallName' , 'Action'];
  requests:request[] = [
    {id:1,BI:"BI-1",callName:"CallName-1",applications:[{id:1,KOBI:"KOBI-1"},{id:2,KOBI:"KOBI-2"}]},
    {id:1,BI:"BI-2",callName:"CallName-2",applications:[{id:1,KOBI:"KOBI-1"},{id:2,KOBI:"KOBI-2"}]},
  ];
  startHour:string = "";
  endHour:string = "";
  request : request | null = null;
  selectedApplication : application | null = null;
  kobimodalConfig:ModalConfig = {
    modalTitle: "Görüşme İçin Saat ve Tarih Seç",
    closeButtonLabel: 'Gönder',
  };
  modalConfig:ModalConfig = {
    modalTitle: "Görüşme İçin Başvuru Seç",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };
@ViewChild('modal') private modalComponent: ModalComponent;
@ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  availableDays: any[] = [
    "30/09/2023","01/10/2023","02/10/2023"]
    changeStartDate(event:string){
      this.startHour = event
    }
    changeEndDate(event:string){
      this.endHour = event
    }
    acRandevuModal(item:any){
      this.request = item;
      this.modalComponent.open();
    }
    acKobiModal(item:any){
      this.selectedApplication = item;
      this.modalComponent.close()
      this.kobiModalComponent.open();
    }
    kapatKobiModal(){
      this.kobiModalComponent.close();
    }

}
