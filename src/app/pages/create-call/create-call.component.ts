import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { ActivatedRoute } from '@angular/router';
import { CallsComponent } from '../calls/calls.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root', // veya belirli bir modül
})

@Component({
  selector: 'app-create-call',
  templateUrl: './create-call.component.html',
  styleUrls: ['./create-call.component.scss']
})
export class CreateCallComponent{
  form: FormGroup;
  yuklenenDosyalar: File[] = [];
isEnabledError: boolean;
  minLength = 20;
  maxLength = 200;
  item = [];
  result:any;
  tabs:any;

  itemId: string | null;


  modalTitle = 'Çağrı Oluşturuldu';
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  @ViewChild('modal') private modalComponent: ModalComponent;

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private data: CallsComponent) {
    this.form = this.fb.group({
      sector: ['', Validators.required],
      keyword: ['', Validators.required],
      subject: ['', Validators.required],
      businessDescription: ['', Validators.required],
      expectationDescription: ['', Validators.required],
      supplierRequirements: ['', Validators.required],
      selectionCriteria: ['', Validators.required],
      files: []
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['itemId'];
      // Fetch the product details using the product service
      if (itemId) {
        this.itemId = itemId;
         this.result = this.data.trigClick.find((element) => element.id == itemId);
         this.tabs = this.data.tabs;

        this.form.patchValue({
          sector: this.result.badget || '', 
          subject: this.result.title || '', 
          keyword: this.result.tags || '', 
          businessDescription: this.tabs[0].content || '', 
          expectationDescription: this.tabs[1].content || '', 
          supplierRequirements: this.tabs[2].content || '', 
          selectionCriteria: this.tabs[3].content || '', 
        });

        return this.result;
      } else {
        this.itemId = null;
        
      }
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      // Form gönderme işlemini burada gerçekleştir
      const formData = new FormData();
  
      formData.append('sector', this.form.value.sector);
      formData.append('keyword', this.form.value.keyword);
      formData.append('subject', this.form.value.subject);
      formData.append('businessDescription', this.form.value.businessDescription);
      formData.append('expectationDescription', this.form.value.expectationDescription);
      formData.append('supplierRequirements', this.form.value.supplierRequirements);
      formData.append('selectionCriteria', this.form.value.selectionCriteria);
  
      // Dosya yükleme işlemini burada gerçekleştir
      if (this.form.value.files && this.form.value.files.length > 0) {
        for (const file of this.form.value.files) {
          formData.append('files', file);
        }
      }
      this.isEnabledError=false;
      this.form.reset();      
       return this.modalComponent.open();

  
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabledError = true;
    }
  }

  closeModal(){
    return this.modalComponent.close();
  }

  

  dosyaBirak(event: DragEvent): void {
    event.preventDefault();
    const dosyalar = event.dataTransfer?.files;

    if (dosyalar) {
      for (let i = 0; i < dosyalar.length; i++) {
        this.yuklenenDosyalar.push(dosyalar[i]);
      }
    }
  }

  dosyaSec(event: Event): void {
    const dosyaInput = event.target as HTMLInputElement;
    const dosyalar = dosyaInput.files;

    if (dosyalar) {
      for (let i = 0; i < dosyalar.length; i++) {
        this.yuklenenDosyalar.push(dosyalar[i]);
      }
    }
  }

  dosyaSecManuel(): void {
    const dosyaInput = document.querySelector('.drop-zone input') as HTMLElement;
    dosyaInput.click();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }
  
  

}
