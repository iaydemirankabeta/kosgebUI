import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

export interface UsersModel {
  name:string,
  email: string;
  phone: string;
  role:string;
  createdBy:string;
}
const ELEMENT_DATA: UsersModel[] = [
  {name:"Gizem Turanlı",email:"gizemturanli@ankabeta.com.tr",phone:"5432231693",role:"Büyük İşletme",createdBy:"Admin"},
  {name:"Hasan Oruç",email:"hasanoruc@ankabeta.com.tr",phone:"5432541193",role:"KOBİ",createdBy:"Admin"},
  {name:"Doğukan Kızıltepe",email:"dogukankiziltepe@ankabeta.com.tr",phone:"5431231663",role:"KOBİ",createdBy:"Admin"},
  {name:"Tufan Yazıcı",email:"tufanyazici@ankabeta.com.tr",phone:"543631692",role:"Büyük İşletme",createdBy:"Admin"},

];

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  displayedColumns: string[] = ['Name', 'E-Mail', 'Phone',"Role","CreatedBy","Action"];
  dataSource = ELEMENT_DATA;
  selectedUser:UsersModel|null
  form:FormGroup
  isEnabledError : boolean = false
  
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  @ViewChild('addUpdateModal') private addUpdateModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;
  modalDeleteConfig: ModalConfig = {
    modalTitle: "Kullanıcı Silme",
    closeButtonLabel:'Sil',
    dismissButtonLabel:'Hayır',
    onClose:() => this.closeDeleteModal(),
    onDismiss:() => this.closeDeleteModal()
  };

  modalAddUpdateConfig: ModalConfig = {
    modalTitle: "Kullanıcı Ekleme / Güncelleme",
    closeButtonLabel:'Ekle',
    dismissButtonLabel:'Kapat',
    onClose:() => this.closeAddUpdateModal(),
    onDismiss:() => this.closeAddUpdateModal(),
  };

  openDeleteModal(item:UsersModel){
    this.selectedUser = item;
    this.deleteModalComponent.open();
  }
  closeDeleteModal(){
    this.selectedUser = null;
    this.deleteModalComponent.close();
    return true;
  }

  openAddUpdateModal(item:UsersModel|null = null){
    this.selectedUser = item;
    if(item !== null){
      this.form = this.fb.group({
        name: [item.name, Validators.required],
        phone: [item.phone, Validators.required],
        password: ['', Validators.required],
        email: [item.email, Validators.required],
        role: [item.role, Validators.required],
      });
    }
    this.addUpdateModalComponent.open();
  }

  closeAddUpdateModal(){
    this.selectedUser = null;
    this.addUpdateModalComponent.close();
    return true;
  }

  onSubmit() {
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('name', this.form.value.name);
      formData.append('phone', this.form.value.phone);
      formData.append('password', this.form.value.password);
      formData.append('email', this.form.value.email);
      formData.append('role', this.form.value.role);


      this.isEnabledError=false;
      this.closeAddUpdateModal();     
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
  }

  search(event:any){
    if(event.target.value.length > 0){
      this.dataSource = ELEMENT_DATA.filter(x => x.name.includes(event.target.value))
    }
    else{
      this.dataSource = ELEMENT_DATA
    }
  }

}
