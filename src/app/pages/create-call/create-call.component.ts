import { Component } from '@angular/core';
import { folderLoad } from './folder-load.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-call',
  templateUrl: './create-call.component.html',
  styleUrls: ['./create-call.component.scss']
})
export class CreateCallComponent {
  form: FormGroup;
  yuklenenDosyalar: File[] = [];
isEnabled = false;
  minLength = 20;
  maxLength = 200;

  constructor(private fb: FormBuilder) {
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
      this.isEnabled=false;
  
      // FormData'yı API'ye gönderme işlemini burada yapabilirsiniz
      // Örnek: this.myApiService.submitFormData(formData).subscribe(response => { ... });
    } else {
      // Form hatalı, kullanıcıya mesaj göster
      this.isEnabled = true;
    }
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
