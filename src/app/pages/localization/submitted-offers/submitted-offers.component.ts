import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';
import { RandevuService } from './randevu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from './meet-modal.component';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { MonthViewDay } from 'calendar-utils'; // İmport MonthViewDay sınıfını içe aktarın


export interface request {
  id: number;
  CallName: string;
  SuitableDate: string;
  EmployeeNumber: number;
  StartTime: string;
  MeetingTime: string;
  EndTime: string;
  IsBreak: string;
  IsLunch: string;
  MeetingType: string;
  Status: string;
  RejectionReason?: string;
  applications: application[];
}
export interface application {
  id: number;
  KOBI: string;
}

export interface ConversationElement {
  id: string,
  firm: string;
  firmAuthority: string;
  solutionName: string;
}

const ELEMENT_DATA: ConversationElement[] = [
  { id: "X Çağrısı", firm: "X şirketi", firmAuthority: "Tufan Yazıcı", solutionName: "Gürültü Engelleyici Malzeme Tedariği" },
  { id: "Y Çağrısı", firm: "Y şirketi", firmAuthority: "Gizem Turanlı", solutionName: "Kozmetik Ürünlerin Tedariği" },
];


@Component({
  selector: 'app-submitted-offers',
  templateUrl: './submitted-offers.component.html',
  styleUrls: ['./submitted-offers.component.scss']
})
export class SubmittedOffersComponent {
  displayedColumns: string[] = ['TeklifId', 'CagrıAdi', 'FirmaAdi', "TeklifTarihi", "TeklifStatusu"];
  displayedColumns2: string[] = ['CozumId', 'CozumAdi', 'FirmaAdi', "FirmaYetkilisi", "YetkiliAjandasi"];
  dataSource = ELEMENT_DATA;
  startHour: string = "";
  endHour: string = "";
  selectedApplication: application | null = null;
  kobimodalConfig: ModalConfig = {
    modalTitle: "Görüşme İçin Saat ve Tarih Seç",
    closeButtonLabel: 'Gönder',
  };
  data = [
    {
      id: 1, callId: 1, callName: 'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
      firmName: 'X Firması ', offerDate: '23.09.2023',
      status: "Açık"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "Değerlendirme Aşamasında"
    },
    {
      id: 3, callId: 3, callName: 'Tekstil Ürün İthalatı',
      firmName: 'Z Firması ', offerDate: '24.09.2023',
      status: "Onaylandı"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "Değerlendirme Aşamasında"
    },
    {
      id: 3, callId: 3, callName: 'Tekstil Ürün İthalatı',
      firmName: 'Z Firması ', offerDate: '24.09.2023',
      status: "Onaylandı"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "Değerlendirme Aşamasında"
    },
  ]

  dataKobi = [
    {
      id: 1, callId: 1, callName: 'Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi',
      firmName: 'X Firması ', offerDate: '23.09.2023',
      status: "KOSGEB'den Görüşme Talep Edildi"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "Reddedildi"
    },
    {
      id: 3, callId: 3, callName: 'Tekstil Ürün İthalatı',
      firmName: 'Z Firması ', offerDate: '24.09.2023',
      status: "KOSGEB'den Görüşme Talep Edildi"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "KOSGEB'den Görüşme Talep Edildi"
    },
    {
      id: 3, callId: 3, callName: 'Tekstil Ürün İthalatı',
      firmName: 'Z Firması ', offerDate: '24.09.2023',
      status: "KOSGEB'den Görüşme Talep Edildi"
    },
    {
      id: 2, callId: 2, callName: 'Kozmetik Teknoloji Çözümler',
      firmName: 'Y Firması ', offerDate: '27.09.2023',
      status: "Reddedildi"
    },
  ]
  trigClick = this.data;
  tabs = [
    { id: '1', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
    { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
    { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  ];
  // trigClick2 = this.data2;
  // tabs2 = [
  //   { id: '62', label: 'Özel Sorun/İhtiyaç/Fırsat Alanı', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
  //   { id: '2', label: 'Teknoloji Tedarikçisinden Beklentisi', content: 'İkinci sekme içeriği burada yer alacak.' },
  //   { id: '3', label: 'Aradığı Teknoloji Tedarikçisi Özellikleri', content: 'Üçüncü sekme içeriği burada yer alacak.' },
  //   { id: '4', label: 'Teknoloji Tedarikçisi Öncelikli Seçim Kriteri', content: 'Dördüncü sekme içeriği burada yer alacak.' }
  // ];

  user$: Observable<UserType>;
  activeTabIndex = 0;
  modalTitle = '';
  showOfferModal = false;
  isList = true;
  callId: string | null;
  constructor(private route: ActivatedRoute, private auth: AuthService,
    private randevuService: RandevuService, private modalService: NgbModal) {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.route.params.subscribe(params => {
      const callId = params['callId'];
      // Fetch the product details using the product service
      if (callId) {
        this.callId = callId;
        this.trigClick = this.data.filter((element) => element.callId == callId);
        return this.trigClick
      } else {
        this.callId = null;

      }
    });
  }
  allOffers() {
    this.callId = null
    this.trigClick = this.data;
  }
  statuses = ["Açık", "Teklif Sürecinde", "Değerlendirme Aşamasında", "Müzakere Aşamasında", "Onay Bekliyor", "Tamamlandı", "Reddedildi", "İptal Edildi", "Süresi Doldu"]
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel: 'Kapat'

  };
  modalOfferConfig: ModalConfig = {
    modalTitle: "Teklif İste",
    closeButtonLabel: 'Teklif İste'

  };
  modalAcceptConfig: ModalConfig = {
    modalTitle: "Teklif Kabul Edildi",
    closeButtonLabel: 'Tamam'

  };
  modalDetailsConfig: ModalConfig = {
    modalTitle: "Teklif Talebi Detayı",
    closeButtonLabel: 'Kapat'
  };
  modalCreateMeetingConfig: ModalConfig = {
    modalTitle: "Toplantı Oluştur",
    hideCloseButton: () => true,
  }
  modalConfigKobi: ModalConfig = {
    modalTitle: "",
    closeButtonLabel: 'Kapat'
    // hideCloseButton: () => true
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('meet') private meet: ModalComponent;
  @ViewChild('acceptmodal') private acceptModalComponent: ModalComponent;
  @ViewChild('meetingModal') private meetingModal: ModalComponent;
  @ViewChild('kobi') private modalKobiComponent: ModalComponent;
  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('cancel') private modalCancelComponent: ModalComponent;


  async openSuccessModal() {
    return await this.modalSuccessComponent.open();
  }
  async openCancelModal() {
    return await this.modalCancelComponent.open();
  }

  targetValue: number;
  selectedOffer: any = this.data[2];
  async openModal(event: any) {
    this.targetValue = event;
    this.showTabContent(this.targetValue);
    return await this.modalComponent.open();

  }

  async openAcceptModal() {
    this.acceptModalComponent.open()
  }

  onFilterChange(event: any) {
    this.trigClick = this.data.filter(x => x.status == event.target.value)
  }

  listOrCard(isList: boolean) {
    console.log(typeof (isList), isList)
    this.isList = isList
  }

  showTabContent(index: number) {
    this.modalConfig = {
      modalTitle: '' + this.tabs[index].label + '',
    }

    this.activeTabIndex = index;
  }

  async createMeeting(item: any) {
    this.selectedOffer = item
    this.meetingModal.open();
  }

  async closeMeetingModal() {
    this.meetingModal.close();
  }


  modalMeetConfig: ModalConfig = {
    modalTitle: "Randevu",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true
  };



  async acRandevuModal() {

    this.meet.open()
  }




  locale: string = "tr";
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;
  selectedDates: Date[] = [];
  viewDate: Date = new Date();
  events: any[] = [];

  setView(view: CalendarView) {
    this.view = view;
  }
  selectedDayViewDate: Date;
  selectedMonthViewDay: CalendarMonthViewDay;
  onDayClick(day: MonthViewDay): void {
    const today = new Date(); // Bugünkü tarihi alın
    const clickedDate = day.date; // Tıklanan günün tarihini alın
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDates.findIndex(
      (selectedDay) => selectedDay.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDates.splice(dateIndex, 1);
    } else {
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
      this.selectedDates.push(clickedDate);
    }
    // Tıklanan tarih bugünden önceyse tıklamayı engelle
    if (clickedDate < today) {
      return;
    }
  }

  selectHour() {
    this.meet.close();
    this.openModalMeet(this.selectedDates);
  }


  openModalMeet(selectedDate: Date[]) {
    console.log(selectedDate);
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.selectedDate = selectedDate;
  }


  dataViews = [
    {
      id: 1,
      companyName: 'X İşletmesi',
      sektor: 'Otomotiv',
      date: '20.11.2023',
    },
    {
      id: 2,
      companyName: 'Y İşletmesi',
      sektor: 'Otomotiv',
      date: '24.11.2023',
    },
    {
      id: 3,
      companyName: 'Z İşletmesi',
      sektor: 'Üretim',
      date: '25.11.2023',
    }
  ]

  displayedColumnsDetail: string[] = ['Id', 'CallName', 'SuitableDate', 'EmployeeNumber', 'StartTime', 'MeetingTime', 'EndTime', 'IsBreak', 'IsLunch', 'MeetingType', 'Status', 'Action'];
  requests: request[] = [
    { id: 1, CallName: "Endüstriyel Aktif Gürültü Kontrolü/Engelleme Sistemi", SuitableDate: "23.09.2021", EmployeeNumber: 5, StartTime: '10:00', MeetingTime: '2 Saat', EndTime: '12:00', IsBreak: 'Yok', IsLunch: 'Yok', MeetingType: 'Yüz yüze', Status: 'KOSGEB Onayladı', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 2, CallName: "Kozmetik Teknoloji Çözümler", SuitableDate: "24.09.2021", EmployeeNumber: 4, StartTime: '10:00', MeetingTime: '4,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Yüz yüze', Status: 'KOSGEB Reddetti', RejectionReason: 'Toplantıya katılım olmadığından reddedildi.', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }] },
    { id: 3, CallName: "Tekstil Ürün İthalatı", SuitableDate: "24.09.2021", EmployeeNumber: 7, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '15 Dakika', IsLunch: '1 Saat', MeetingType: 'Online', Status: 'KOSGEB Yeni Tarih Önersinde Bulundu', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }, { id: 2, KOBI: "KOBI-4" }, { id: 2, KOBI: "KOBI-5" }] },
    { id: 4, CallName: "Kozmetik Teknoloji Çözümler", SuitableDate: "24.09.2021", EmployeeNumber: 10, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '30 Dakika', IsLunch: '1 Saat', MeetingType: 'Hibrit', Status: 'KOSGEB Onayladı', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
    { id: 5, CallName: "B2B Talebi", SuitableDate: "24.09.2021", EmployeeNumber: 10, StartTime: '09:00', MeetingTime: '5,5 Saat', EndTime: '16:00', IsBreak: '30 Dakika', IsLunch: '1 Saat', MeetingType: 'Hibrit', Status: 'KOSGEB\'e Gönderildi', applications: [{ id: 1, KOBI: "KOBI-1" }, { id: 2, KOBI: "KOBI-2" }, { id: 2, KOBI: "KOBI-3" }] },
  ];
  request: request | null = null;

  getKobies(item: any) {
    this.request = item;

    // this.modalComponent.close()
    this.modalKobiComponent.open();
  }
  changeEndDate(event: string) {
    this.endHour = event
  }
  changeStartDate(event: string) {
    this.startHour = event
  }
  availableDays: any[] = [
    "30/09/2023", "01/10/2023", "02/10/2023"]

  acKobiModal() {
    this.kobiModalComponent.open();
  }
  successModalConfig: ModalConfig = {
    modalTitle: "",
    closeButtonLabel: 'Kapat',
  }
  cancelModalConfig: ModalConfig = {
    modalTitle: "",
    closeButtonLabel: 'Kapat',
  }

}

