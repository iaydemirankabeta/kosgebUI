import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { MeetingService } from '../meetings/meeting.service';
import { first } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-meet-plan',
  templateUrl: './meet-plan.component.html',
  styleUrls: ['./meet-plan.component.scss']
})
export class MeetPlanComponent {

  @ViewChild('toplantiForm') toplantiForm: NgForm; // NgForm nesnesini tanımlayın
  contactForm:FormGroup;
  isExclude : boolean = false;
  isEnabledError:boolean = false;
  selectedCompany:any={id:"0"};
  searchCompanies:any=null;
  searchUserCompanies:any=[];
  searchUser:any=[];
  selectedUser:any={appUser:{id:"0"}}
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

  constructor(private fb:FormBuilder,private meetingService:MeetingService,private changeDetectorRef: ChangeDetectorRef) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  toplantiKaydet() {
    if (this.toplantiForm.invalid) {
      // Form geçerli değil, işlem yapmayın
      return;
    }

    // Form geçerli, burada form verilerini işleyebilirsiniz
    console.log('Toplanti kaydedildi:', this.toplanti);
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
    this.toplantiForm.resetForm(this.toplanti);

  }

  yeniKatilimci = '';
  katilimcilar: string[] = [];


  katilimciEkle() {
    if (this.yeniKatilimci.trim() !== '') {
      this.katilimcilar.push(this.yeniKatilimci.trim());
      this.yeniKatilimci = ''; // Yeni katılımcıyı sıfırla
    }
  }

  katilimciKaldir(index: number) {
    this.katilimcilar.splice(index, 1);
  }
  @ViewChild('addUpdateModal') private addUpdateModalComponent: ModalComponent;


  modalAddUpdateConfig: ModalConfig = {
    modalTitle: "Katılımcı Ekleme",
    closeButtonLabel:'Ekle',
    dismissButtonLabel:'Kapat',
    onClose:() => this.closeAddUpdateModal(),
    onDismiss:() => this.closeAddUpdateModal(),
  };



  openAddUpdateModal(){
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
      this.closeAddUpdateModal();     
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
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
      console.log("elseif")
      this.meetingService.searchUsers(this.selectedCompany.id).pipe(first()).subscribe((searchResult) => {
        console.log(searchResult);
        this.searchUser = searchResult.data.data;
        this.changeDetectorRef.detectChanges();
      })

    }
  }

  userSelect(item:any){
    this.selectedUser = item
  }


}
