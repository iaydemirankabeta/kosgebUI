import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface request {
  id: number;
  MeetingName: string;
  RequestMeetiingBI: string;
  EmployeeNumber: number;
  MeetingTime: string;
  IsBreak: string;
  MeetingType: string;
  applications: application[];
}
export interface application {
  id: number;
  KOBI: string;
}
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})

export class InterviewComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rejectionReason: ['', Validators.required]
    });
  }

  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  businessList:any = [];

  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
 
  displayedColumns: string[] = ['Id', 'MeetingName', 'RequestMeetiingBI',  'EmployeeNumber', 'MeetingTime',  'IsBreak',  'MeetingType',  'Action'];
  requests: request[] = [
    { id: 1, MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Yüz yüze', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 2, MeetingName: "Kozmetik Teknoloji Çözümler", RequestMeetiingBI: "BI-2",  EmployeeNumber: 4,  MeetingTime: '4,5 Saat',IsBreak: '15 Dakika',MeetingType: 'Yüz yüze',  applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 3, MeetingName: "Tekstil Ürün İthalatı", RequestMeetiingBI: "BI-3", EmployeeNumber: 7,MeetingTime: '5,5 Saat',IsBreak: '15 Dakika',  MeetingType: 'Online', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }, { id: 2, KOBI: "KOBI-4" }, { id: 2, KOBI: "KOBI-5" }] },
    { id: 4, MeetingName: "B2B Talebi", RequestMeetiingBI: "BI-4", EmployeeNumber: 10, MeetingTime: '5,5 Saat', IsBreak: '30 Dakika', MeetingType: 'Hibrit', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
    { id: 5, MeetingName: "B2B Talebi", RequestMeetiingBI: "BI-4", EmployeeNumber: 10, MeetingTime: '5,5 Saat', IsBreak: '30 Dakika', MeetingType: 'Hibrit', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
    { id: 6, MeetingName: "B2B Talebi", RequestMeetiingBI: "BI-4", EmployeeNumber: 10, MeetingTime: '5,5 Saat', IsBreak: '30 Dakika', MeetingType: 'Hibrit', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
    { id: 7, MeetingName: "B2B Talebi", RequestMeetiingBI: "BI-4", EmployeeNumber: 10, MeetingTime: '5,5 Saat', IsBreak: '30 Dakika', MeetingType: 'Hibrit', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
  ];
  rejectID=0;
  startHour: string = "";
  endHour: string = "";
  request: request | null = null;
  selectedApplication: application | null = null;
  kobimodalConfig: ModalConfig = {
    modalTitle: "Görüşme İçin Saat ve Tarih Seç",
    closeButtonLabel: 'Onayla',
    onClose: () => {
      return  this.modalSuccessComponent.open();
    }
  };
 
  modalConfigSuccess: ModalConfig = {
    modalTitle: "Görüşme Tarih ve Saati Seçildi",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };

  closeMeetingModal(){
    this.form.reset();
    return true;
  }

 

  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('kobi') private modalKobiComponent: ModalComponent;

  characterCount: number = 0;

  updateCharacterCount() {
    const rejectionReasonControl = this.form.get('rejectionReason');
    if (rejectionReasonControl) {
      this.characterCount = rejectionReasonControl.value.length;
    }
  }

  
  availableDays: any[] = [
    "30/09/2023", "01/10/2023", "02/10/2023"]
  changeStartDate(event: string) {
    this.startHour = event
  }
  changeEndDate(event: string) {
    this.endHour = event
  }
  
  acKobiModal() {
    this.kobiModalComponent.open();
  }

  kapatKobiModal() {
    this.kobiModalComponent.close();
  }
 
 
}
