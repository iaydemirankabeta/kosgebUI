import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface request {
  id: number;
  MeetingName: string;
  Status: string;
  RequestMeetiingBI: string;
  SuitableDate: string;
  EmployeeNumber: number;
  StartTime: string;
  MeetingTime: string;
  EndTime: string;
  IsBreak: string;
  IsLunch: string;
  MeetingType: string;
  applications: application[];
}
export interface application {
  id: number;
  KOBI: string;
}
@Component({
  selector: 'app-gorusme-talepleri',
  templateUrl: './gorusme-talepleri.component.html',
  styleUrls: ['./gorusme-talepleri.component.scss']
})

export class GorusmeTalepleriComponent {
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
 
  displayedColumns: string[] = ['Id', 'MeetingName', 'RequestMeetiingBI', 'SuitableDate', 'EmployeeNumber', 'StartTime', 'MeetingTime', 'EndTime', 'IsBreak', 'IsLunch', 'MeetingType', 'Status', 'Action'];
  requests: request[] = [
    { id: 1, MeetingName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", RequestMeetiingBI: "BI-1", SuitableDate: "23.09.2021", EmployeeNumber: 5, StartTime: '10:00', MeetingTime: '2 Saat', EndTime: '12:00', IsBreak: 'Yok', IsLunch: 'Yok', MeetingType: 'Yüz yüze', Status: 'Bİ Görüşme Talebinde Bulundu', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 2, MeetingName: "Kozmetik Teknoloji Çözümler", RequestMeetiingBI: "BI-2", SuitableDate: "24.09.2021", EmployeeNumber: 4, StartTime: '10:00', MeetingTime: '4,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Yüz yüze', Status: 'Bİ İptal Etti', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 3, MeetingName: "Tekstil Ürün İthalatı", RequestMeetiingBI: "BI-3", SuitableDate: "24.09.2021", EmployeeNumber: 7, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Online', Status: 'Bİ Onayladı', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }, { id: 2, KOBI: "KOBI-4" }, { id: 2, KOBI: "KOBI-5" }] },
    { id: 4, MeetingName: "B2B Talebi", RequestMeetiingBI: "BI-4", SuitableDate: "24.09.2021", EmployeeNumber: 10, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '30 Dakika', IsLunch: '1 Saat', MeetingType: 'Hibrit', Status: 'Bİ Düzenleme Önerisinde Bulundu', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
  ];
  startHour: string = "";
  endHour: string = "";
  request: request | null = null;
  selectedApplication: application | null = null;
  kobimodalConfig: ModalConfig = {
    modalTitle: "Görüşme İçin Saat ve Tarih Seç",
    closeButtonLabel: 'Gönder',
  };

  modalConfig: ModalConfig = {
    modalTitle: "Görüşme İçin Başvuru Seç",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };
  modalConfigSuccess: ModalConfig = {
    modalTitle: "Görüşme Talebi Onaylandı",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };
  modalConfigKobi: ModalConfig = {
    modalTitle: "",
    closeButtonLabel: 'Kapat'
    // hideCloseButton: () => true
  };
  closeMeetingModal(){
    this.ModalRejectionReasonComponent.close();
    this.form.reset();
    return true;
  }
  //red
  modalConfigRejectionReason: ModalConfig = {
    modalTitle: "Reddetme Sebebi",
    closeButtonLabel:'Kapat',
    onClose:() => this.closeMeetingModal()
  }
  successModalConfig2: ModalConfig = {
    modalTitle: "",
    closeButtonLabel:'Kapat',
    onClose:() => this.closeMeetingModal(),
  }

  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('kobi') private modalKobiComponent: ModalComponent;
  @ViewChild('rejectionReasonModal') private ModalRejectionReasonComponent: ModalComponent;//red
  @ViewChild('rejectionReasonSuccess') private ModalrejectionReasonSuccessComponent: ModalComponent;

  characterCount: number = 0;

  updateCharacterCount() {
    const rejectionReasonControl = this.form.get('rejectionReason');
    if (rejectionReasonControl) {
      this.characterCount = rejectionReasonControl.value.length;
    }
  }
  async openRejectionReasonModal(){
    return await this.ModalRejectionReasonComponent.open();
  }
  availableDays: any[] = [
    "30/09/2023", "01/10/2023", "02/10/2023"]
  changeStartDate(event: string) {
    this.startHour = event
  }
  changeEndDate(event: string) {
    this.endHour = event
  }
  acRandevuModal(item: any) {
    this.request = item;
    this.modalComponent.open();
  }
  acKobiModal(item: any) {
    this.selectedApplication = item;
    this.modalComponent.close()
    this.kobiModalComponent.open();
  }

  kapatKobiModal() {
    this.kobiModalComponent.close();
  }
  openSuccessModal() {
    this.modalSuccessComponent.open();
    return true;
  }
  openrejectionReasonSuccessModal() {
    this.ModalrejectionReasonSuccessComponent.open();
    return true;
  }
  
  getKobies(item: any) {
    this.request = item;

    this.modalComponent.close()
    this.modalKobiComponent.open();
  }
  agetKobies(item: any) {
    this.request = item;
    this.modalComponent.open();
  }

}
