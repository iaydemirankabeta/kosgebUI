import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

export interface ConversationElement {
  id:string,
  firm: string;
  firmAuthority: string;
  date: string;
  date2:Date;
  hour:string;
  description:string;
  participants:string[];
}

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
const ELEMENT_DATA: ConversationElement[] = [
  {id:"X Çağrısı",firm:"X şirketi", description:"X Çağrısı Görüşmesi", firmAuthority:"Tufan Yazıcı",date:"10-09-2023",date2:new Date("10-09-2023"),hour:"10:00",participants:["a@mail.com","b@mail.com"]},
  {id:"Y Çağrısı",firm:"Y şirketi",  description:"Y Çağrısı Görüşmesi", firmAuthority:"Gizem Turanlı",date:"11-09-2023",date2:new Date("11-09-2023"),hour:"13:00",participants:["a@mail.com","b@mail.com","c@mail.com","d@mail.com"]},
  {id:"Z Çağrısı",firm:"Z şirketi",  description:"Z Çağrısı Görüşmesi", firmAuthority:"Onur Yaşar",date:"09-09-2023",date2:new Date("09-09-2023"),hour:"15:00",participants:["a@mail.com","b@mail.com","c@mail.com"]},
];
@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent {
  displayedColumns: string[] = ['Cagri', 'GorusulecekFirma', 'GorusulecekFirmaYetkilisi', 'GorusmeTarihi',"GorusmeSaati","KatilimciSayisi","Aksiyon"];
  dataSource = ELEMENT_DATA;
  form: FormGroup;
  participant:"";
  selectedConversation = this.dataSource[0]
  isEnabledError = false;
  @ViewChild('cancelmodal') private cancelModalComponent: ModalComponent;
  @ViewChild('editmodal') private editModalComponent: ModalComponent;
  modalCancelConfig: ModalConfig = {
    modalTitle: "Görüşmeyi İptal Etmek Üzeresiniz",
    closeButtonLabel:'Kapat',
    hideCloseButton:() => true
  };  
  modalEditConfig: ModalConfig = {
    modalTitle: "Görüşmeyi Düzenle",
    closeButtonLabel:'Kapat',
    hideCloseButton:() => true
  };
  constructor(private modal: NgbModal,private fb:FormBuilder,private datePipe:DatePipe) {
    this.form = this.fb.group({
      meetingDate: ['', Validators.required],
      meetingHour: ['', Validators.required],
      meetingDescription: ['', Validators.required],
      link: ['', Validators.required],
    });
  }
  openEditModal(item:ConversationElement){
    this.selectedConversation = item;
    this.form = this.fb.group({
      meetingDate: [this.datePipe.transform(item.date2, 'yyyy-MM-dd'),Validators.required],
      meetingHour: [item.hour, Validators.required],
      meetingDescription: [item.description, Validators.required],
      link: ['', Validators.required],
    });
    this.editModalComponent.open()
  }
  closeEditModal(){
    this.editModalComponent.close()
  }
  openCancelModal(){
    this.cancelModalComponent.open();
  }
  closeCancelModal(){
    this.cancelModalComponent.close();
  }
  addParticipant(){
    this.selectedConversation.participants.push(this.participant)
  }
  changeInputParticipant(event:any){
    this.participant = event.target.value
  }
  deleteParticipant(item:string){
    this.selectedConversation.participants = this.selectedConversation.participants.filter(x => x !== item)
  }
  locale:string = "tr";
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: subDays(startOfDay(new Date()), 1),
      title: 'X Çağrısı	X şirketi',
      color: { ...colors.yellow },
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: subDays(startOfDay(new Date()), 2),
      end: subDays(startOfDay(new Date()), 2),
      title: 'Z Çağrısı	Z şirketi',
      color: { ...colors.blue },
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: subDays(startOfDay(new Date()), 0),
      end: subDays(startOfDay(new Date()), 0),
      title: 'Y Çağrısı	Y şirketi',
      color: { ...colors.red },
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
  ];

  activeDayIsOpen: boolean = true;



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  onSubmit() {
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('meetingDescription', this.form.value.meetingDescription);
      formData.append('meetingDate', this.form.value.meetingDate);
      formData.append('meetingHour', this.form.value.meetingHour);
      formData.append('link', this.form.value.link);

      this.isEnabledError=false;
      this.closeEditModal();     
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
  }
}
