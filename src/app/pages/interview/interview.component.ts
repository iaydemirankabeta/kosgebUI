import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

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
export interface requestKosgeb {
  id: number;
  KobiID: number;
  BiID: number;
  MeetingName: string;//Çağrı Adı
  BusinessRepresentative:string;// Büyük işletme Yetkilisi
  KobiRepresentative:string;//Kobi Yetkilisi
  isKobiJoin:boolean;//Kobi görüşmeye katıldı mı
  applicationsKosgeb: applicationKosgeb[];
}
export interface applicationKosgeb {
  id: number;
  MeetingName: string;
  RequestMeetiingBI: string;
  EmployeeNumber: number;
  MeetingTime: string;
  IsBreak: string;
  MeetingType: string;
  Meetinglink:  string;
}
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})

export class InterviewComponent {
  form: FormGroup;
  user$: Observable<UserType>;

  constructor(private fb: FormBuilder,private auth:AuthService,) {
    this.form = this.fb.group({
      rejectionReason: ['', Validators.required]
    });
    this.user$ = this.auth.currentUserSubject.asObservable();
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
  displayedColumnsKosgeb: string[] = ['Id','MeetingName', 'BusinessRepresentative', 'KobiRepresentative','Information', 'Action'];
  requestsKosgeb: requestKosgeb[] = [
    { id: 1,isKobiJoin:true, MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", KobiID: 1,BiID:1,BusinessRepresentative: "Vestel Yetkilisi",KobiRepresentative: 'KOBİ yetkilisi A',applicationsKosgeb:[{id:1,MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Yüz yüze',Meetinglink: 'Polaris Plaza'}]},
    { id: 2,isKobiJoin:true, MeetingName: "Tekstil Ürün İthalatı", KobiID: 1,BiID:2,BusinessRepresentative: "Özdilek Tekstil Yetkilisi",KobiRepresentative: 'KOBİ yetkilisi A',applicationsKosgeb:[{id:1,MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Online',Meetinglink: 'www.meet1.com'}]},
    { id: 3,isKobiJoin:true, MeetingName: "Tekstil Ürün İthalatı", KobiID: 2,BiID:2,BusinessRepresentative: "Özdilek Tekstil Yetkilisi",KobiRepresentative: 'KOBİ yetkilisi B',applicationsKosgeb:[{id:1,MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Yüz yüze',Meetinglink: 'www.meet1.com'}]},
    { id: 4,isKobiJoin:false, MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", KobiID: 3,BiID:1,BusinessRepresentative: "Vestel Yetkilisi",KobiRepresentative: 'KOBİ yetkilisi C',applicationsKosgeb:[{id:1,MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Hibrit',Meetinglink: 'www.meet1.com'}]},
    { id: 5,isKobiJoin:false, MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", KobiID: 4,BiID:1,BusinessRepresentative: "Vestel Yetkilisi",KobiRepresentative: 'KOBİ yetkilisi D',applicationsKosgeb:[{id:1,MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1",  EmployeeNumber: 5, MeetingTime: '2 Saat', IsBreak: 'Yok',  MeetingType: 'Yüz yüze',Meetinglink: 'www.meet1.com'}]},
   
  ];
  rejectID=0;
  startHour: string = "";
  endHour: string = "";
  request: request | null = null;
  requestKosgeb: requestKosgeb | null = null;
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
   modalConfigKosgebDetail: ModalConfig = {
    modalTitle: "Oturum  Bilgisi",
    closeButtonLabel: 'Kapat',
  };

  closeMeetingModal(){
    this.form.reset();
    return true;
  }

 

  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('kobi') private modalKobiComponent: ModalComponent;
  @ViewChild('KosgebDetail') private modalKosgebDetailComponent: ModalComponent;

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
  openKosgebDetailModal(item: any) {
    this.requestKosgeb = item;

    this.modalKosgebDetailComponent.open();
  }
 
 closeKosgebDetailModal() {
    this.modalKosgebDetailComponent.close();
  }
  acKobiModal() {
    this.kobiModalComponent.open();
  }
  kapatKobiModal() {
    this.kobiModalComponent.close();
  }
 
 
}
