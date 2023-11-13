import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, UserType } from 'src/app/modules/auth';
import { Observable } from 'rxjs';

export interface request {
  id: number;
  BusinessRepresentative: string;
  SessionDate: string;
  SessionHour: string;
  BreakCount: string;
  KobiRepresentative:string;
  MeetingType:string;
  Meetinglink:string;
  isPermission:boolean;
}

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})

export class SessionsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private auth: AuthService) {
    this.form = this.fb.group({
      meetingdescription: ['', Validators.required]
    });
  }
  originalRequests: request[]; // Bu diziyi, bileşenin başlangıcında tanımlayın ve verilerin orijinal hali olarak saklayın.

  ngOnInit(): void {
    this.originalRequests = [...this.requests];

    this.user$ = this.auth.currentUserSubject.asObservable();
  }
  PermissonList(filterValue:any): void { debugger 

    if (filterValue.checked === true) {
      this.requests = this.requests.filter(request => request.isPermission);
    } else {
      // Eğer filterValue.checked false ise, orijinal requests dizisine geri dön
      this.requests = [...this.originalRequests];
    }
    
  }
  selectedFiltersList: { filterName: string, selectedValue: any }[] = [];
  businessList:any = [];

  filters: any[] ;
  selectedFilters: { [key: number]: any } = {};
 
  displayedColumns: string[] = ['Id', 'BusinessRepresentative', 'SessionDate',  'SessionHour', 'BreakCount',  'KobiRepresentative',  'MeetingType','Meetinglink','Action'];
  requests: request[] = [
    { id: 1, BusinessRepresentative: "Vestel Yetkilisi", SessionDate: "24.09.2021",  SessionHour: '10:30', BreakCount: '2 Mola - 10dk.', KobiRepresentative: 'KOBİ yetkilisi A',  MeetingType:'Online',Meetinglink: 'www.meet1.com' ,isPermission:true},
    { id: 2, BusinessRepresentative: "Beko Yetkilisi", SessionDate: "25.09.2021",  SessionHour: '09:30', BreakCount: '1 Mola - 15dk.', KobiRepresentative: 'KOBİ yetkilisi B', MeetingType:'Yüz yüze', Meetinglink: 'Polaris Plaza', isPermission:true},
    { id: 3, BusinessRepresentative: "ISUZU Yetkilisi", SessionDate: "26.09.2021",  SessionHour: '10:00', BreakCount: '2 Mola - 10dk.', KobiRepresentative: 'KOBİ yetkilisi C',MeetingType:'Hibrit' , Meetinglink: 'www.meet3.com' ,isPermission:false},
  ];
  user$: Observable<UserType>;
  meetinglinkInput: string = '';
  meetingID=0;
  startHour: string = "";
  endHour: string = "";
  request: request | null = null;
  
  
  modalConfigSuccess: ModalConfig = {
    modalTitle: "Görüşme Yeri/Linki Kayıt ",
    closeButtonLabel: 'Kapat',
    onClose: () => this.closeMeetinglinkModal(),
    
    
  };
  modalConfigMeetingLink: ModalConfig = {
    modalTitle: "Görüşme Yeri/Linki",
    closeButtonLabel: 'Kapat',
    hideCloseButton: () => true,
    
  };
  
  closeMeetingModal(){
    this.form.reset();
    return true;
  }
  openMeetinglink(item:any) {
    this.meetingID=item;
   return  this.modalMeetingLinkComponent.open();
 }
 

  @ViewChild('kobimodal') private kobiModalComponent: ModalComponent;
  @ViewChild('success') private modalSuccessComponent: ModalComponent;
  @ViewChild('meetingLink') private modalMeetingLinkComponent: ModalComponent;

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

   closeMeetinglinkModal() {
      this.modalMeetingLinkComponent.close();
      return true;
  }
 
 editMeetinglink() {
  const requestToUpdate = this.requests.find(request => request.id === this.meetingID);
  if (requestToUpdate) {
    //update eklenecek
    requestToUpdate.Meetinglink = this.meetinglinkInput;
    this.meetinglinkInput = '';
  }
  return  this.modalSuccessComponent.open();
  }

}
