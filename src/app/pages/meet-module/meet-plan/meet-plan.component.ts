import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { MeetingService } from '../meetings/meeting.service';
import { first } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { Contact } from './contact.model';
import { MeetPlanService } from './meet-plan.service';
import { MeetingDTO } from '../meetings/meeting.model';


@Component({
  selector: 'app-meet-plan',
  templateUrl: './meet-plan.component.html',
  styleUrls: ['./meet-plan.component.scss']
})
export class MeetPlanComponent {

  @ViewChild('toplantiForm') toplantiForm: NgForm; // NgForm nesnesini tanımlayın
  contactForm:FormGroup;
  isExclude : boolean = false;
  saveExcludeContact=false;
  saveContact=false;
  isContactOrOther: boolean;
  isEnabledError:boolean = false;
  selectedCompany:any={id:"0"};
  searchCompanies:any=null;
  searchUserCompanies:any=[];
  searchUser:any=[];
  excludeUser:any;
  selectedUser:any={appUser:{id:"0"}}
  myContacts:Contact[]
  selectedContact:any = {contactUser:{id:"0"},name:""}
  participants:any=[];
  excludeParticipants:any=[];
  searchCities:any=null
  selectedCity:any={id:"0"}
  toplanti = {
    adi: '',
    konu: '',
    tarih: '',
    saat: '', 
    link: '',
    katilimci: '',
    kvkk: '',
    firma: ''
  };

  constructor(private fb:FormBuilder,private meetingService:MeetingService,private changeDetectorRef: ChangeDetectorRef,private meetPlanService:MeetPlanService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
    });
    this.getContacts();
  }

  toplantiKaydet() {
    if (this.toplantiForm.invalid || (this.excludeParticipants.length < 1 && this.participants.length < 1)) {
      // Form geçerli değil, işlem yapmayın
      return;
    }

    // Form geçerli, burada form verilerini işleyebilirsiniz
    let meeting:MeetingDTO={
      id:"",
      userId:"",
      excludeUserDtos : this.excludeParticipants,
      participants : Array.from(this.participants,(x:any) => x.appUser.id),
      name:this.toplanti.adi,
      cityId:this.selectedCity.id,
      topic:this.toplanti.konu,
      meetingDate:this.toplanti.tarih,
      meetingHour:this.toplanti.saat,
      meetingLink:this.toplanti.link,
      companyId:this.selectedCompany.id
    }
    this.meetingService.addMeeting(meeting).pipe(first()).subscribe(res => {
      res;
    });
    // İsterseniz veriyi bir API'ye gönderebilirsiniz.

    // Formu sıfırlayın
    this.resetForm();
  }

  resetForm() {
    // Form verilerini sıfırlayın
    this.toplanti = {
      adi: '',
      konu: '',
      tarih: '',
      saat: '',
      link: '',
      katilimci: '',
      kvkk: '',
      firma: ''
    };
    this.participants= [];
    this.excludeParticipants = [];
    this.toplantiForm.resetForm(this.toplanti);

  }

  @ViewChild('addUpdateModal') private addUpdateModalComponent: ModalComponent;


  modalAddUpdateConfig: ModalConfig = {
    modalTitle: "Katılımcı Ekleme",
    closeButtonLabel:'Ekle',
    dismissButtonLabel:'Kapat',
    onClose:() => this.isContactOrOther ? this.saveFromContact() : this.isExclude ? this.onSubmit() : this.saveParticipants(),
  };



  openAddUpdateModal(){
    this.contactForm.patchValue({
      company: this.selectedCompany.name, 
      // formControlName2: myValue2 (can be omitted)
    });
    this.addUpdateModalComponent.open();
  }

  closeAddUpdateModal(){
    this.addUpdateModalComponent.close();
    return true;
  }

  toggleIsExclude(){
    this.isExclude = !this.isExclude
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('name', this.contactForm.value.name);
      formData.append('surmane', this.contactForm.value.surname);
      formData.append('email', this.contactForm.value.email);
      formData.append('department', this.contactForm.value.department);
      formData.append('title', this.contactForm.value.title);
      formData.append('company', this.contactForm.value.company);


      this.isEnabledError=false;
      if(this.saveExcludeContact){
        this.meetPlanService.addContact({
          eMail:this.contactForm.value.email,
          name:this.contactForm.value.name+" "+this.contactForm.value.surname,
          companyName:this.selectedCompany.nam,
          department:this.contactForm.value.department,
          title:this.contactForm.value.title,
          id:"",
          companyId:"",
          contactUserId:""
        }).pipe(first()).subscribe();
      }
      this.excludeParticipants.push(
        {
          eMail:this.contactForm.value.email,
          name:this.contactForm.value.name+" "+this.contactForm.value.surname,
          companyName:this.selectedCompany.name,
          department:this.contactForm.value.department,
          title:this.contactForm.value.title,
          id:"",
          companyId:"",
          contactUserId:""
        }
      );
      this.contactForm.reset();
      this.isExclude = false;
      this.saveExcludeContact=false;
      this.saveContact=false;
      return true;
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isExclude = false;
      this.saveExcludeContact=false;
      this.saveContact=false;
      this.isEnabledError = true;
      return false
    }
  }

  companySearch(event:any){
    if(event.target.value.length > 3){
      this.meetingService.searchCompanies(event.target.value).pipe(first()).subscribe((searchResult:any) => {
        console.log(searchResult)
        this.searchCompanies = searchResult.data.data
        this.changeDetectorRef.detectChanges();
      })
    }
  }

  companySelect(item:any){
    this.selectedCompany = item;
    this.userSearch()
  }

  userSearch(event:any=null){
    if(this.selectedCompany !== null && event !== null){
      this.meetingService.searchUsers(this.selectedCompany.id,event.target.value).pipe(first()).subscribe((searchResult) => {
        console.log(searchResult);
        this.searchUser = searchResult
        this.changeDetectorRef.detectChanges();
      }
      )
    }
    else if(this.selectedCompany !== null){
      this.meetingService.searchUsers(this.selectedCompany.id).pipe(first()).subscribe((searchResult) => {
        console.log(searchResult);
        this.searchUser = searchResult.data.data;
        this.changeDetectorRef.detectChanges();
      })

    }
  }

  userSelect(item:any){
    this.selectedUser = item
    this.isContactOrOther = false;
    this.selectedContact = {contactUser:{id:"0"}};

  }

  toggleExcludeContact(bool:boolean){
    this.saveExcludeContact=bool;
  }
  toggleContact(bool:boolean){
    console.log(bool,"bool");
    this.saveContact=bool;
    
  }

  getContacts(){
    this.meetPlanService.getContacts().pipe().subscribe((result:any)=>{
      this.myContacts = result.data.data
      console.log(this.myContacts)
    })
  }

  deleteContact(item:any){
    this.meetPlanService.deleteContact(item.id)
  }

  saveParticipants(){
    this.participants.push(this.selectedUser);
    console.log(this.selectedUser)
    if(this.saveContact){
      this.meetPlanService.addContact({
        contactUserId : this.selectedUser.appUser.id
      }).pipe(first()).subscribe();
    }
    this.selectedUser = {appUser:{id:"0"}};
    this.isExclude = false;
    this.saveExcludeContact=false;
    this.saveContact=false;
    return true;
  }

  saveFromContact(){
    if(this.selectedContact.contactUser !== null){
      this.participants.push({
        appUser:this.selectedContact.contactUser
      });
    }
    else{
      this.excludeParticipants.push(
        {
          eMail:this.selectedContact.email,
          name:this.selectedContact.name,
          companyName:this.selectedContact.company,
          department:this.selectedContact.department,
          title:this.selectedContact.title,
          id:"",
          companyId:"",
          contactUserId:""
        }
      );
    }
    this.selectedContact = {contactUser:{id:"0"}};
    this.isExclude = false;
    this.saveExcludeContact=false;
    this.saveContact=false;
    this.isContactOrOther = true;
    return true;
  }

  removeParticipant(item:any){
    const index = this.participants.indexOf(item);
    if (index > -1) { // only splice array when item is found
      this.participants.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  removeExcludeParticipant(item:any){
    const index = this.excludeParticipants.indexOf(item);
    if (index > -1) { // only splice array when item is found
      this.excludeParticipants.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  selectContact(item:any){
    this.selectedContact = item
    this.isContactOrOther = true;
    this.selectedUser = {appUser:{id:"0"}};

  }
  citySearch(event:any){
    if(event.target.value.length > 3){
      this.meetingService.searchCities(event.target.value).pipe(first()).subscribe((searchResult:any) => {
        console.log(searchResult)
        this.searchCities = searchResult.data
        this.changeDetectorRef.detectChanges();
      })
    }
  }
  citySelect(item:any){
    this.selectedCity = item;
  }

}
