import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { ActivatedRoute } from '@angular/router';
import { CallsComponent } from '../calls/calls.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Adress } from 'src/app/modules/account/company-adresses/company-adresses.component';
import { Observable } from 'rxjs';
import { UserType } from 'src/app/modules/auth';
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
  filters : any = [];
  user$: Observable<UserType>;
isEnabledError: boolean;
  minLength = 20;
  maxLength = 200;
  item = [];
  result:any;
  tabs:any;
  searchTerm = new FormControl('');


  get filteredAdresses() {
    const searchTermValue = this.searchTerm.value as string;
    return this.adresses.filter((option) => {
      return option.title.toLowerCase().includes(searchTermValue.toLowerCase());
    });
  }

  itemId: string | null;


  modalTitle = 'Çağrı Oluşturuldu';
  modalConfig: ModalConfig = {
    modalTitle: this.modalTitle,
    closeButtonLabel:'Kapat'

  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  adresses: Adress[] = [
    { id: 1, title: "Merkez", longAdress: "İstanbul", city: "İstanbul", type: "Merkez" },
    { id: 2, title: "İzmit Fabrika", longAdress: "İstanbul", city: "Kocaeli", type: "Fabrika" },
    { id: 3, title: "İnegöl Fabrika", longAdress: "İstanbul", city: "Bursa", type: "Fabrika" },
    { id: 4, title: "Maslak Ofis", longAdress: "İstanbul", city: "İstanbul", type: "Ofis" },

  ];
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private data: CallsComponent) {
    var formGroupInfo = {};
    (formGroupInfo as any)['name'] = ['', Validators.required];
    (formGroupInfo as any)['adress'] = ['', Validators.required];
    (formGroupInfo as any)['piece'] = ['', Validators.required];
    this.filters = this.getKobiFilter();
    this.getKobiFilter().forEach((item) => {
      (formGroupInfo as any)[item.name] = [''];
    });
    (formGroupInfo as any)['files'] = [];
    (formGroupInfo as any)['expectationDescription'] = ['', Validators.required];
    (formGroupInfo as any)['isQuestionable'] = [''];
    (formGroupInfo as any)['showFAQ'] = [''];
    
    this.form = this.fb.group(formGroupInfo);
  } 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['itemId'];
      // Fetch the product details using the product service
      if (itemId) {
        this.itemId = itemId;
         this.result = this.data.trigClick.find((element) => element.id == itemId);
         this.tabs = this.data.tabs;
         var patchValue = {};
         (patchValue as any)['files'] = [];
         (patchValue as any)['name'] = this.result.title || '';
         (patchValue as any)['adress'] = this.result.adress || '';
         (patchValue as any)['expectationDescription'] = this.result.expectationDescription || '';
         Object.keys(this.result).forEach((key) => {
          (patchValue as any)[key] = this.result[key] || '';
         })
        
        this.form.patchValue(patchValue);
        this.form.controls['expectationDescription'].markAsPristine();
        this.form.controls['name'].markAsPristine();
        this.form.controls['piece'].markAsPristine();
        this.form.controls['ihracgtip'].markAsPristine();
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
      this.getKobiFilter().forEach((item) => {
        formData.append(item.name, this.form.value[item.name]);
      });
      formData.append('expectationDescription', this.form.value.expectationDescription);
  
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
  
  getKobiFilter() {
    return [
        {
          id: 1,
          label:'Sektör',
          name: 'sektor',
          options: [
            { id: 1, name: 'Gıda', value: 1, category: 'Sektör',sektor:'gida' },
            { id: 2, name: 'İnşaat', value: 2, category: 'Sektör',sektor:'insaat' },
            { id: 3, name: 'Tekstil', value: 3, category: 'Sektör',sektor:'tekstil' },
            { id: 4, name: 'Kozmetik', value: 4, category: 'Sektör',sektor:'kozmetik' },
            { id: 5, name: 'Teknoloji', value: 5, category: 'Sektör',sektor:'teknoloji' },
            { id: 6, name: 'Hububat (Tahıl)', value: 6, category: 'Sektör',sektor:'hububat' },
          ],
        },
        {
          id: 2,
          label:'İşletme Tipi',
          name: 'it',
          options: [
            { id: 1, name: 'Şahıs Şirketi', value: 1, category: 'İşletme Tipi' },
            { id: 2, name: 'Limited Şirket', value: 2, category: 'İşletme Tipi' },
            { id: 3, name: 'Anonim Şirket', value: 3, category: 'İşletme Tipi' },
            { id: 4, name: 'Özel İşletme', value: 4, category: 'İşletme Tipi' },
            { id: 5, name: 'Kamu İşletme', value: 5, category: 'İşletme Tipi' },
            { id: 6, name: 'Karma İşletmeler', value: 6, category: 'İşletme Tipi' },
            { id: 7, name: 'Yabancı Sermayeli İşletmeler', value: 7, category: 'İşletme Tipi' },
          ],
        },
        {
          id: 3,
          label:'Sertifikasyon ve Belgeler',
          name: 'svb',
          options: [
            { id: 1, name: 'ISO 9001 - Kalite Yönetim Sistemi', value: 1, type:'sector', category: 'Sertifikasyonlar ve Belgeler' },
            { id: 2, name: 'ISO 13485 - Tıbbi Cihazlar Kalite Yönetim Sistemi', value: 2, category: 'Sertifikasyonlar ve Belgeler' },
            { id: 3, name: 'ISO 14001 - Çevre Yönetim Sistemi', value: 3, category: 'Sertifikasyonlar ve Belgeler' },
            { id: 4, name: 'ISO 15378 - İlaçlar için birincil ambalaj malzemeleri', value: 4, category: 'Sertifikasyonlar ve Belgeler' },
          ],
        },
        {
          id: 4,
          label:'İşletme Faaliyet Yeri',
          name: 'ify',
          options: [
            { id: 1, name: 'İstanbul', value: 1, category: 'İşletme Faaliyet Yeri' },
            { id: 2, name: 'Ankara', value: 2, category: 'İşletme Faaliyet Yeri' },
            { id: 3, name: 'İzmir', value: 3, category: 'İşletme Faaliyet Yeri' },
            { id: 4, name: 'Antalya', value: 4, category: 'İşletme Faaliyet Yeri' },
          ],
        },
        {
          id: 5,
          label:'Toplam Personel',
          name: 'tp',
          options: [
            { id: 1, name: '0 - 5', value: 1, category: 'Toplam Personel' },
            { id: 2, name: '6 - 10', value: 2, category: 'Toplam Personel' },
            { id: 3, name: '11 - 20', value: 3, category: 'Toplam Personel' },
            { id: 4, name: '21 - 50', value: 4, category: 'Toplam Personel' },
            { id: 5, name: '51 - 250', value: 5, category: 'Toplam Personel' },
            { id: 6, name: '250 ve üstü', value: 6, category: 'Toplam Personel' },
          ],
        },
         {
      id: 6,
      label: 'NACE Kodu',
      name: 'nace_kodu',
      options: [
        { id: 1, name: '01.13.17', value: 1, category: 'NACE Kodu' },
        { id: 2, name: '01.13.18', value: 2, category: 'NACE Kodu' },
        { id: 3, name: '01.13.19', value: 3, category: 'NACE Kodu' },
        { id: 4, name: '01.23.02', value: 4, category: 'NACE Kodu' },
        { id: 5, name: '01.24.04', value: 5, category: 'NACE Kodu' },
        { id: 6, name: '01.61.06', value: 6, category: 'NACE Kodu' },
        { id: 7, name: '46.17.02', value: 7, category: 'NACE Kodu' },
      ],
        },
        {
      id: 7,
      label: 'Ciro',
      name: 'ciro',
      options: [
        { id: 1, name: '0 - 1 Milyon TL', value: 1, category: 'Ciro' },
        { id: 2, name: '1 - 5 Milyon TL', value: 2, category: 'Ciro' },
        { id: 3, name: '5 - 10 Milyon TL', value: 3, category: 'Ciro' },
        { id: 4, name: '10 - 15 Milyon TL', value: 4, category: 'Ciro' },
        { id: 5, name: '15 - 25 Milyon TL', value: 5, category: 'Ciro' },
        { id: 6, name: '25 - 50 Milyon TL', value: 6, category: 'Ciro' },
        { id: 7, name: '50 - 125 Milyon TL', value: 7, category: 'Ciro' },
      ],
        },
        {
      id: 8,
      label: 'Tedarikçi Tipi',
      name: 'tedarikci_tipi',
      options: [
        { id: 1, name: 'Doğrudan Tedarikçi (1. Derece Tedarikçi)', value: 1, category: 'Tedarikçi Tipi' },
        { id: 2, name: 'Dolaylı Tedarikçi (2. Seviye Tedarikçi)', value: 2, category: 'Tedarikçi Tipi' },
        { id: 3, name: 'Mal Tedarikçisi', value: 3, category: 'Tedarikçi Tipi' },
        { id: 4, name: 'Hizmet Alımı', value: 4, category: 'Tedarikçi Tipi' },
      ],
        },
{
  id: 9,
  label: 'GTİP Bilgisi',
  name: 'gtip',
  options: [
    { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
    { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
    { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
    { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
    { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
    { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
    { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
    { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
    { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
    { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
    { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
    { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
    { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
    { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
    { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
    { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
    { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
    { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
    { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
    { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
    { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
    { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
    { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
    { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
    { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
  ],
},
{
  id: 10,
  label: 'Yakınlık (KM)',
  name: 'yakinlik',
  options: [
    { id: 1, name: '10-20 Km', value: 1, category: 'Yakınlık (KM)' },
    { id: 2, name: '20-50 Km', value: 2, category: 'Yakınlık (KM)' },
    { id: 3, name: '50-100 Km', value: 3, category: 'Yakınlık (KM)' },
    { id: 4, name: '100-200 Km', value: 4, category: 'Yakınlık (KM)' },
    { id: 5, name: '200-300 Km', value: 5, category: 'Yakınlık (KM)' },
    { id: 6, name: '300-400 Km', value: 6, category: 'Yakınlık (KM)' },
    { id: 7, name: '400-500 Km', value: 7, category: 'Yakınlık (KM)' },
    { id: 8, name: '500-600 Km', value: 8, category: 'Yakınlık (KM)' },
    { id: 9, name: '500 + Km', value: 9, category: 'Yakınlık (KM)' },
  ],
},
{
  id: 11,
  label: 'Ek Özellik',
  name: 'ekozellik',
  options: [
    { id: 1, name: 'Arge-Merkezi', value: 1, category: 'Ek Özellik' },
    { id: 2, name: 'Tasarım Belgesi', value: 2, category: 'Ek Özellik' },
  ],
},{
  id: 12,
  label: 'Beyaz Yakalı Personel Sayısı',
  name: 'beyazyaka',
  options: [
    { id: 1, name: '0 - 5', value: 1, category: 'Beyaz Yaka' },
    { id: 2, name: '6 - 10', value: 2, category: 'Beyaz Yaka' },
    { id: 3, name: '11 - 20', value: 3, category: 'Beyaz Yaka' },
    { id: 4, name: '21 - 50', value: 4, category: 'Beyaz Yaka' },
    { id: 5, name: '51 - 250', value: 5, category: 'Beyaz Yaka'},
    { id: 6, name: '250 ve üstü', value: 6, category:'Beyaz Yaka' },
  ],
},{
  id: 12,
  label: 'Mavi Yaka Personel Sayısı',
  name: 'maviyaka',
  options: [
    { id: 1, name: '0 - 5', value: 1, category: 'Mavi Yaka' },
    { id: 2, name: '6 - 10', value: 2, category:  'Mavi Yaka'},
    { id: 3, name: '11 - 20', value: 3, category:  'Mavi Yaka'},
    { id: 4, name: '21 - 50', value: 4, category:  'Mavi Yaka'},
    { id: 5, name: '51 - 250', value: 5, category:  'Mavi Yaka' },
    { id: 6, name: '250 ve üstü', value: 6, category:  'Mavi Yaka'},
  ],
},{
  id: 20,
  label: 'Yurt İçi Satış',
  name: 'yurticiatis',
  options: [
    { id: 1, name: '10k - 50k', value: 1, category: 'Yurt İçi Satış' },
    { id: 2, name: '100k - 200k', value: 2, category:  'Yurt İçi Satış' },
    { id: 3, name: '200k - 500k', value: 3, category: 'Yurt İçi Satış' },
    { id: 4, name: '500k - 1M', value: 4, category:  'Yurt İçi Satış' },
  ],
},{
  id: 14,
  label: 'Yurt Dışı Satış',
  name: 'yurtdisiatis',
  options: [
    { id: 1, name: '10k - 50k', value: 1, category: 'Yurt Dışı Satış' },
    { id: 2, name: '100k - 200k', value: 2, category:  'Yurt Dışı Satış' },
    { id: 3, name: '200k - 500k', value: 3, category: 'Yurt Dışı Satış' },
    { id: 4, name: '500k - 1M', value: 4, category:  'Yurt Dışı Satış' },
  ],
},{
  id: 15,
  label: 'Karlılık',
  name: 'karlilik',
  options: [
    { id: 1, name: '0-%25', value: 1, category: 'Karlılık' },
    { id: 2, name: '%25-%50', value: 2, category: 'Karlılık' },
    { id: 3, name: '%50-%75', value: 3, category: 'Karlılık' },
    { id: 4, name: '%75-%100', value: 4, category: 'Karlılık' },
    { id: 5, name: '%100+', value: 2, category: 'Karlılık' },

  ],
},{
  id: 16,
  label: 'İstatistiki Bölge',
  name: 'istatistikibölge',
  options: [
    { id: 1, name: 'Düzey 1 İstatistiki Bölge', value: 1, category: 'İstatistiki Bölge' },
    { id: 2, name: 'Düzey 2 İstatistiki Bölge', value: 2, category: 'İstatistiki Bölge' },
    { id: 3, name: 'Düzey 3 İstatistiki Bölge', value: 3, category: 'İstatistiki Bölge' },
  ],
},{
  id: 17,
  label: 'Ar-Ge Projesi Tamamlamış Olma Durumu',
  name: 'argeTamamlama',
  options: [
    { id: 1, name: 'Evet', value: 1, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
    { id: 2, name: 'Hayır', value: 2, category: 'Ar-Ge Projesi Tamamlamış Olma Durumu' },
  ],
},
{
  id: 18,
  label: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu',
  name: 'argeTamamlama',
  options: [
    { id: 1, name: 'Evet', value: 1, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
    { id: 2, name: 'Hayır', value: 2, category: 'Hâlihazırda Ar-Ge Projesi Yürütme Durumu' },
  ],
},

{
  id: 19,
  label: 'İthal Edilen Ürünlerin GTİP’leri',
  name: 'ithalgtip',
  options: [
    { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
    { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
    { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
    { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
    { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
    { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
    { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
    { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
    { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
    { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
    { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
    { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
    { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
    { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
    { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
    { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
    { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
    { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
    { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
    { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
    { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
    { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
    { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
    { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
    { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
  ],
},
{
  id: 19,
  label: 'İhraç Edilen Ürünlerin GTİP’leri',
  name: 'ihracgtip',
  options: [
    { id: 1, name: '0101.10.00.00', value: 1, category: 'GTİP Bilgisi' },
    { id: 2, name: '0201.10.00.00', value: 2, category: 'GTİP Bilgisi' },
    { id: 3, name: '0301.10.00.00', value: 3, category: 'GTİP Bilgisi' },
    { id: 4, name: '0401.10.00.00', value: 4, category: 'GTİP Bilgisi' },
    { id: 5, name: '0501.10.00.00', value: 5, category: 'GTİP Bilgisi' },
    { id: 6, name: '2523.10.00.00', value: 6, category: 'GTİP Bilgisi' },
    { id: 7, name: '2523.20.00.00', value: 7, category: 'GTİP Bilgisi' },
    { id: 8, name: '2523.30.00.00', value: 8, category: 'GTİP Bilgisi' },
    { id: 9, name: '2523.40.00.00', value: 9, category: 'GTİP Bilgisi' },
    { id: 10, name: '2523.50.00.00', value: 10, category: 'GTİP Bilgisi' },
    { id: 11, name: '5201.11.00.00', value: 11, category: 'GTİP Bilgisi' },
    { id: 12, name: '5201.12.00.00', value: 12, category: 'GTİP Bilgisi' },
    { id: 13, name: '5201.13.00.00', value: 13, category: 'GTİP Bilgisi' },
    { id: 14, name: '5201.14.00.00', value: 14, category: 'GTİP Bilgisi' },
    { id: 15, name: '5201.15.00.00', value: 15, category: 'GTİP Bilgisi' },
    { id: 16, name: '3304.10.00.00', value: 16, category: 'GTİP Bilgisi' },
    { id: 17, name: '3304.20.00.00', value: 17, category: 'GTİP Bilgisi' },
    { id: 18, name: '3304.30.00.00', value: 18, category: 'GTİP Bilgisi' },
    { id: 19, name: '3304.40.00.00', value: 19, category: 'GTİP Bilgisi' },
    { id: 20, name: '3304.50.00.00', value: 20, category: 'GTİP Bilgisi' },
    { id: 21, name: '8517.12.00.00', value: 21, category: 'GTİP Bilgisi' },
    { id: 22, name: '8517.21.00.00', value: 22, category: 'GTİP Bilgisi' },
    { id: 23, name: '8517.22.00.00', value: 23, category: 'GTİP Bilgisi' },
    { id: 24, name: '8517.23.00.00', value: 24, category: 'GTİP Bilgisi' },
    { id: 25, name: '8517.24.00.00', value: 25, category: 'GTİP Bilgisi' },
  ],
},

    ];
}

}
