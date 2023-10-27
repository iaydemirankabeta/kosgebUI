import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
export interface request {
  id: number;
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
  displayedColumns: string[] = ['Id', 'RequestMeetiingBI', 'SuitableDate', 'EmployeeNumber', 'StartTime', 'MeetingTime', 'EndTime', 'IsBreak', 'IsLunch', 'MeetingType', 'Action'];
  requests: request[] = [
    { id: 1, RequestMeetiingBI: "BI-1", SuitableDate: "23.09.2021", EmployeeNumber: 5, StartTime: '10:00', MeetingTime: '2 Saat', EndTime: '12:00', IsBreak: 'Yok', IsLunch: 'Yok', MeetingType: 'Yüz yüze', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 2, RequestMeetiingBI: "BI-2", SuitableDate: "24.09.2021", EmployeeNumber: 4, StartTime: '10:00', MeetingTime: '4,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Yüz yüze', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 3, RequestMeetiingBI: "BI-3", SuitableDate: "24.09.2021", EmployeeNumber: 7, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Online', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }, { id: 2, KOBI: "KOBI-4" }, { id: 2, KOBI: "KOBI-5" }] },
    { id: 4, RequestMeetiingBI: "BI-4", SuitableDate: "24.09.2021", EmployeeNumber: 10, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '30 Dakika', IsLunch: '1 Saat', MeetingType: 'Hibrit', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
 ];
  IsClose = false;
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
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;

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
  getKobies(item: any) {
    this.request = item;
    this.IsClose=false;
  }
  isClose() {
    this.IsClose = true;
  }
}
