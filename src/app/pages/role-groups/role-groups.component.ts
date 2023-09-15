import { Component, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

export interface roleValues{
  name:string,
  value:boolean
}
export interface roleGroup{
  id:number
  name:string,
  description:string,
  createdBy:string,
  createdDate:string,
  authority:roleValues[]
}

@Component({
  selector: 'app-role-groups',
  templateUrl: './role-groups.component.html',
  styleUrls: ['./role-groups.component.scss']
})
export class RoleGroupsComponent {

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  form:FormGroup

  kobi : roleValues[] = [
    {name:'Tüm Çağrıları Görüntüle',value:false},
    {name:'Tüm Teklifleri Görüntüle',value:false},
    {name:'Tüm Çözümleri Görüntüle',value:false},
    {name:'Tüm Başvuruları Görüntüle',value:false},
    {name:'Çağrı Oluştur',value:false},
    {name:'Teklifte Bulun',value:true},
    {name:'Çözüm Görüntüle',value:true},
    {name:'Çağrı İptal Et',value:false},
    {name:'Görüşme Oluştur',value:true},
    {name:'Çözüm Raporu Oluştur',value:true},
    {name:'Teklif Raporu İndir',value:true},
    {name:'Kobi Dashboardı Görüntüleme',value:true},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:false},
    {name:'KOSGEB Dashboardı Görüntüleme',value:false},
    {name:'Admın Dashboardı Görüntüleme',value:false},
    {name:'Başvurularım Sekmesini Görüntüleme',value:true},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:true},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:true},
    {name:'Çözüm Oluştur',value:true},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:true},
    {name:'Toplantı Sekmesini Görüntüleme',value:true},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:true},
    {name:'Raporlama Sekmesini Görüntüleme',value:true},
    {name:'Anlaşma Sekmesini Görüntüleme',value:true},
    {name:'Global Zeka Sekmesini Görüntüleme',value:true},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:true},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:true},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:true},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:true},
    {name:'Finansman Sekmesini Görüntüleme',value:true},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:true},
  ]
  bi : roleValues[] = [
    {name:'Tüm Çağrıları Görüntüle',value:false},
    {name:'Tüm Teklifleri Görüntüle',value:false},
    {name:'Tüm Çözümleri Görüntüle',value:false},
    {name:'Tüm Başvuruları Görüntüle',value:false},
    {name:'Çağrı Oluştur',value:true},
    {name:'Teklifte Bulun',value:true},
    {name:'Çözüm Görüntüle',value:true},
    {name:'Çağrı İptal Et',value:true},
    {name:'Görüşme Oluştur',value:true},
    {name:'Çözüm Raporu Oluştur',value:true},
    {name:'Teklif Raporu İndir',value:true},
    {name:'Kobi Dashboardı Görüntüleme',value:false},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:true},
    {name:'KOSGEB Dashboardı Görüntüleme',value:false},
    {name:'Admın Dashboardı Görüntüleme',value:false},
    {name:'Başvurularım Sekmesini Görüntüleme',value:true},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:true},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:true},
    {name:'Çözüm Oluştur',value:false},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:true},
    {name:'Toplantı Sekmesini Görüntüleme',value:true},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:true},
    {name:'Raporlama Sekmesini Görüntüleme',value:true},
    {name:'Anlaşma Sekmesini Görüntüleme',value:true},
    {name:'Global Zeka Sekmesini Görüntüleme',value:true},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:true},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:true},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:true},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:true},
    {name:'Finansman Sekmesini Görüntüleme',value:true},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:true},
  ]
  kosgebadmin : roleValues[] = [
    {name:'Tüm Çağrıları Görüntüle',value:true},
    {name:'Tüm Teklifleri Görüntüle',value:true},
    {name:'Tüm Çözümleri Görüntüle',value:true},
    {name:'Tüm Başvuruları Görüntüle',value:true},
    {name:'Çağrı Oluştur',value:true},
    {name:'Teklifte Bulun',value:true},
    {name:'Çözüm Görüntüle',value:true},
    {name:'Çağrı İptal Et',value:true},
    {name:'Görüşme Oluştur',value:true},
    {name:'Çözüm Raporu Oluştur',value:true},
    {name:'Teklif Raporu İndir',value:true},
    {name:'Kobi Dashboardı Görüntüleme',value:true},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:true},
    {name:'KOSGEB Dashboardı Görüntüleme',value:true},
    {name:'Admın Dashboardı Görüntüleme',value:true},
    {name:'Başvurularım Sekmesini Görüntüleme',value:true},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:true},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:true},
    {name:'Çözüm Oluştur',value:true},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:true},
    {name:'Toplantı Sekmesini Görüntüleme',value:true},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:true},
    {name:'Raporlama Sekmesini Görüntüleme',value:true},
    {name:'Anlaşma Sekmesini Görüntüleme',value:true},
    {name:'Global Zeka Sekmesini Görüntüleme',value:true},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:true},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:true},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:true},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:true},
    {name:'Finansman Sekmesini Görüntüleme',value:true},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:true},
  ]
  kosgebuser : roleValues[] = [
    {name:'Tüm Çağrıları Görüntüle',value:true},
    {name:'Tüm Teklifleri Görüntüle',value:true},
    {name:'Tüm Çözümleri Görüntüle',value:true},
    {name:'Tüm Başvuruları Görüntüle',value:true},
    {name:'Çağrı Oluştur',value:true},
    {name:'Teklifte Bulun',value:true},
    {name:'Çözüm Görüntüle',value:true},
    {name:'Çağrı İptal Et',value:true},
    {name:'Görüşme Oluştur',value:true},
    {name:'Çözüm Raporu Oluştur',value:true},
    {name:'Teklif Raporu İndir',value:true},
    {name:'Kobi Dashboardı Görüntüleme',value:true},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:true},
    {name:'KOSGEB Dashboardı Görüntüleme',value:true},
    {name:'Admın Dashboardı Görüntüleme',value:false},
    {name:'Başvurularım Sekmesini Görüntüleme',value:true},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:true},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:true},
    {name:'Çözüm Oluştur',value:true},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:true},
    {name:'Toplantı Sekmesini Görüntüleme',value:true},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:true},
    {name:'Raporlama Sekmesini Görüntüleme',value:true},
    {name:'Anlaşma Sekmesini Görüntüleme',value:true},
    {name:'Global Zeka Sekmesini Görüntüleme',value:true},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:true},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:true},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:true},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:true},
    {name:'Finansman Sekmesini Görüntüleme',value:true},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:true},
  ]
  muadil : roleValues[] = [
    {name:'Gösterge Paneli',value:true},
    {name:'Tüm Çağrıları Görüntüle',value:true},
    {name:'Tüm Teklifleri Görüntüle',value:true},
    {name:'Tüm Çözümleri Görüntüle',value:true},
    {name:'Tüm Başvuruları Görüntüle',value:true},
    {name:'Çağrı Oluştur',value:false},
    {name:'Teklifte Bulun',value:false},
    {name:'Çözüm Görüntüle',value:false},
    {name:'Çağrı İptal Et',value:false},
    {name:'Görüşme Oluştur',value:false},
    {name:'Çözüm Raporu Oluştur',value:false},
    {name:'Teklif Raporu İndir',value:false},
    {name:'Kobi Dashboardı Görüntüleme',value:false},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:false},
    {name:'KOSGEB Dashboardı Görüntüleme',value:false},
    {name:'Admın Dashboardı Görüntüleme',value:false},
    {name:'Başvurularım Sekmesini Görüntüleme',value:false},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:false},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:false},
    {name:'Çözüm Oluştur',value:false},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:false},
    {name:'Toplantı Sekmesini Görüntüleme',value:false},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:false},
    {name:'Raporlama Sekmesini Görüntüleme',value:false},
    {name:'Anlaşma Sekmesini Görüntüleme',value:false},
    {name:'Global Zeka Sekmesini Görüntüleme',value:false},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:false},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:false},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:false},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:false},
    {name:'Finansman Sekmesini Görüntüleme',value:false},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:false},
  ]
  admin : roleValues[] = [
    {name:'Tüm Çağrıları Görüntüle',value:true},
    {name:'Tüm Teklifleri Görüntüle',value:true},
    {name:'Tüm Çözümleri Görüntüle',value:true},
    {name:'Tüm Başvuruları Görüntüle',value:true},
    {name:'Çağrı Oluştur',value:true},
    {name:'Teklifte Bulun',value:true},
    {name:'Çözüm Görüntüle',value:true},
    {name:'Çağrı İptal Et',value:true},
    {name:'Görüşme Oluştur',value:true},
    {name:'Çözüm Raporu Oluştur',value:true},
    {name:'Teklif Raporu İndir',value:true},
    {name:'Kobi Dashboardı Görüntüleme',value:true},
    {name:'Büyük İşletme Dashboardı Görüntüleme',value:true},
    {name:'KOSGEB Dashboardı Görüntüleme',value:true},
    {name:'Admın Dashboardı Görüntüleme',value:true},
    {name:'Başvurularım Sekmesini Görüntüleme',value:true},
    {name:'Geçmiş Çağrılar Sekmesini Görüntüleme',value:true},
    {name:'Uygulama Örnekleri Sekmesini Görüntüleme',value:true},
    {name:'Çözüm Oluştur',value:true},
    {name:'Geçmiş çözümler sekmesini görüntüle',value:true},
    {name:'Toplantı Sekmesini Görüntüleme',value:true},
    {name:'B2B Zekası Sekmesini Görüntüleme',value:true},
    {name:'Raporlama Sekmesini Görüntüleme',value:true},
    {name:'Anlaşma Sekmesini Görüntüleme',value:true},
    {name:'Global Zeka Sekmesini Görüntüleme',value:true},
    {name:'Çağrı Zekası Sekmesini Görüntüleme',value:true},
    {name:'E-Ticaret Sekmesini Görüntüleme',value:true},
    {name:'Tedarik Zekası Sekmesini Görüntüleme',value:true},
    {name:'Yerleştirme Zekası Sekmesini Görüntüleme',value:true},
    {name:'Finansman Sekmesini Görüntüleme',value:true},
    {name:'Proje Zekası Sekmesini Görüntüleme',value:true},
  ]
  roles : roleGroup[]=[
    {id:1,name:'Kobi',description:'Kobi Rol Grubu',createdBy:'Admin',createdDate:'12.12.2020',authority:this.kobi},
    {id:2,name:'Büyük İşletme',description:'Büyük İşletme Rol Grubu',createdBy:'Admin',createdDate:'12.12.2020',authority:this.bi},
    {id:3,name:'KOSGEB Admin',description:'KOSGEB Admin Rol Grubu',createdBy:'Admin',createdDate:'12.12.2020',authority:this.kosgebadmin},
    {id:4,name:'KOSGEB Kullanıcı',description:'KOSGEB Kullanıcı Rol Grubu',createdBy:'Admin',createdDate:'12.12.2020',authority:this.kosgebuser},
    {id:5,name:'Muadil',description:'Muadil Rol Grubu',createdBy:'Admin',createdDate:'12.12.2020',authority:this.muadil},

  ]

  selectedRoleGroup:roleGroup = this.roles[0]
  modalConfig: ModalConfig = {
    modalTitle: this.selectedRoleGroup.name + " Rolünü Düzenliyorsunuz",
    closeButtonLabel:'Kapat'

  };
  addUpdateModalConfig: ModalConfig = {
    modalTitle: "Rol Grup Ekle/Düzenle",
    closeButtonLabel:'Kapat',
    hideCloseButton : () => true
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  @ViewChild('addUpdateModal') private addUpdateModalComponent:ModalComponent
  @ViewChild('successModal') private successModal:ModalComponent;
  isEnabledError:boolean = false;
  openModal(item:roleGroup){
    this.selectedRoleGroup = item;
    return this.modalComponent.open();
  }
  closeModal(){
    return this.modalComponent.close();
  }
  openAddUpdateModal(item:roleGroup | null = null){
    if(item !== null){
      this.selectedRoleGroup = item;
      this.form = this.fb.group({
        name: [item.name, Validators.required],
        description: [item.description, Validators.required],
      });
    }
    else{
      this.form = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      });
    }
    this.addUpdateModalComponent.open();
  }
  onSubmit(){
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('name', this.form.value.name);
      formData.append('description', this.form.value.description);

      this.isEnabledError=false;
      this.form.reset();      
      this.addUpdateModalComponent.close();
      return this.successModal.open();
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
      
    }
  }

}
