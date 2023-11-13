import { Injectable } from '@angular/core';
import { Category } from '../pages/catalog/categories/category.model';
import { Product } from '../pages/catalog/products/products.model';
import { Company } from '../models/Company.model';
import { CompanyTypes } from '../modules/auth/models/user-company.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categories: Category[] = [
    { id: 1, name: 'Elektronik',description:'Elektronik Ürünleri',img:{url:'./assets/media/stock/ecommerce/elektrik.png'},statu:true },
    { id: 2, name: 'Savunma',description:'Savunma Ürünleri',img:{url:'../../assets/media/stock/ecommerce/savunma.png'},statu:false},
    { id: 3, name: 'Yazılım',description:'Yazılım Ürünleri',img:{url:'../../assets/media/stock/ecommerce/yazilim.png'},statu:true },
    { id: 5, name: 'Yapay Zeka',description:'Yapay Zeka',img:{url:'../../assets/media/stock/ecommerce/yapayzeka.png'},statu:true },
    // ... other categories
  ];

  private products: Product[] = [
    { id: 1, name: 'Tablet', price: 500, description: 'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1, img: { url: './assets/media/stock/ecommerce/tablet.png' }, sku: 10022, qty: 7,offerQty:52, rating: 4, status: true,priceTRY:500,priceUSD: 50,priceEURO:45 },
    { id: 2, name: 'Klavye', price: 50, description: 'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1, img: { url: './assets/media/stock/ecommerce/klavye.jpg' }, sku: 10023, qty: 10,offerQty:1000, rating: 4, status: true,priceTRY:50,priceUSD: 5,priceEURO:4 },
    { id: 5, name: 'AI Robot', price: 1500, description: 'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5, img: { url: './assets/media/stock/ecommerce/hdd.png' }, sku: 10026, qty: 3,offerQty:5, rating: 5, status: true,priceTRY:1500,priceUSD: 150,priceEURO:140 },
    { id: 8, name: 'Yazılım Kütüphanesi', price: 120, description: 'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 3, img: { url: './assets/media/stock/ecommerce/yazilim.png' }, sku: 10029, qty: 20,offerQty:2, rating: 4, status: false,priceTRY:120,priceUSD: 12,priceEURO:10 },
    { id: 22, name: 'USB Fan', price: 10, description: 'Bilgisayarınıza takabileceğiniz minyatür bir USB vantilatör.', categoryId: 1, img: { url: './assets/media/stock/ecommerce/usbfan.jpg' }, sku: 10032, qty: 15,offerQty:1, rating: 3, status: false,priceTRY:10,priceUSD: 1,priceEURO:0.8 },
    { id: 23, name: 'Güneş Gözlüğü', price: 15, description: 'Şık ve ucuz güneş gözlüğü.', categoryId: 1, img: { url: './assets/media/stock/ecommerce/gunesgozlugu.jpg' }, sku: 10033, qty: 30,offerQty:0, rating: 4, status: true,priceTRY:15,priceUSD: 1.5,priceEURO:1.2 },
    { id: 24, name: 'Ofis Koltuğu', price: 80, description: 'Rahat bir ofis koltuğu.', categoryId: 1, img: { url: './assets/media/stock/ecommerce/ofiskoltugu.png' }, sku: 10034, qty: 10,offerQty:0, rating: 4, status: true,priceTRY:80,priceUSD: 8,priceEURO:6 },
    { id: 26, name: 'Klavye', price: 20, description: 'Masa üstü kullanım için LED lamba.', categoryId: 3, img: { url: './assets/media/stock/ecommerce/klavye.jpg' }, sku: 10036, qty: 25,offerQty:0, rating: 4, status: true,priceTRY:20,priceUSD: 2,priceEURO:1},
    
];

  public Companies : Company[] = [
    {
      id:1,
      img : {url:'./assets/media/logos/ankabeta-logo.png'},
      type:CompanyTypes.KOBI,
      title:"Ankabeta",
      adress:{
        addressLine:"Reşit Paşa Mah. Katar Cad. ARI 4 Binası No: 2 / 50 / 6 Sarıyer",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Yedek Parça Satışı",value:"4032,4 TL"},
        {type:"Tedarik",value:"232,4 TL"},
        {type:"Diğerleri",value:"5032,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"80"},
        {year:"2021",value:"60"},
        {year:"2022",value:"120"},
        {year:"2023",value:"230"},
      ],
      Orders:[
        {year:"2020",value:"8000"},
        {year:"2021",value:"60500"},
        {year:"2022",value:"12023"},
        {year:"2023",value:"230455"},
      ],
      personelInfo:{
        office:200,
        field:130
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:1,
      img:{url:""},
      title:"Ankabeta",
      type:CompanyTypes.KOBI,
      adress:{
        addressLine:"Reşit Paşa Mah. Katar Cad. ARI 4 Binası No: 2 / 50 / 6 Sarıyer",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Yedek Parça Satışı",value:"4032,4 TL"},
        {type:"Tedarik",value:"232,4 TL"},
        {type:"Diğerleri",value:"5032,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"80"},
        {year:"2021",value:"60"},
        {year:"2022",value:"120"},
        {year:"2023",value:"230"},
      ],
      Orders:[
        {year:"2020",value:"8000"},
        {year:"2021",value:"60500"},
        {year:"2022",value:"12023"},
        {year:"2023",value:"230455"},
      ],
      personelInfo:{
        office:200,
        field:130
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:2,
      img : {url:'./assets/media/logos/bmw.png'},
      type:CompanyTypes.BI,
      title:"BMW",
      adress:{
        addressLine:"Muhtar Mah. Kaldırımcı Cad. No: 2 / 50 / 6 Maslak",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Araç Satışı",value:"6032,4 TL"},
        {type:"Tedarik",value:"4322,4 TL"},
        {type:"Diğerleri",value:"10032,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"56"},
        {year:"2021",value:"87"},
        {year:"2022",value:"140"},
        {year:"2023",value:"240"},
      ],
      Orders:[
        {year:"2020",value:"80050"},
        {year:"2021",value:"620500"},
        {year:"2022",value:"125023"},
        {year:"2023",value:"2130455"},
      ],
      personelInfo:{
        office:300,
        field:530
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:3,
      img : {url:'./assets/media/logos/isuzu.png'},
      type:CompanyTypes.BI,
      title:"Isuzu",
      adress:{
        addressLine:"Paşa Mah. Yumurtacı Abdi Cad. No: 8 / 50 / 6 Kağıthane",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Yedek Parça Satışı",value:"6032,4 TL"},
        {type:"Tedarik",value:"234,4 TL"},
        {type:"Diğerleri",value:"5032,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"63"},
        {year:"2021",value:"54"},
        {year:"2022",value:"80"},
        {year:"2023",value:"120"},
      ],
      Orders:[
        {year:"2020",value:"800"},
        {year:"2021",value:"6050"},
        {year:"2022",value:"1203"},
        {year:"2023",value:"23045"},
      ],
      personelInfo:{
        office:320,
        field:100
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:4,
      img : {url:'./assets/media/logos/logo1.png'},
      title:"Ulak A.Ş",
      type:CompanyTypes.KOBI,
      adress:{
        addressLine:"Mahmut Paşa Mah. Ulak Cad. No: 4 / 20 / 62 Sarıyer",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Yazılım Hizmeti",value:"34202,4 TL"},
        {type:"Donanım Hizmeti",value:"2323,4 TL"},
        {type:"Diğerleri",value:"50432,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"45"},
        {year:"2021",value:"200"},
        {year:"2022",value:"230"},
        {year:"2023",value:"250"},
      ],
      Orders:[
        {year:"2020",value:"4092"},
        {year:"2021",value:"5034"},
        {year:"2022",value:"4235"},
        {year:"2023",value:"4231"},
      ],
      personelInfo:{
        office:50,
        field:23
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:5,
      img : {url:'./assets/media/logos/logo2.png'},
      title:"Odak Teknoloji",
      type:CompanyTypes.KOBI,
      adress:{
        addressLine:"Kerim Cad. No: 54 / 50 / 6 Kadıköy",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Donanım Satışı",value:"4332,4 TL"},
        {type:"Teknik Servis Hizmeti",value:"2232,4 TL"},
        {type:"Diğerleri",value:"50432,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"58"},
        {year:"2021",value:"76"},
        {year:"2022",value:"80"},
        {year:"2023",value:"123"},
      ],
      Orders:[
        {year:"2020",value:"8000"},
        {year:"2021",value:"60500"},
        {year:"2022",value:"12023"},
        {year:"2023",value:"230455"},
      ],
      personelInfo:{
        office:200,
        field:130
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:6,
      img : {url:'./assets/media/logos/kosgeb.png'},
      title:"KOSGEB",
      type:CompanyTypes.KOSGEB,
      adress:{
        addressLine:"T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı Hacı Bayram Mah. İstanbul Cad. No: 3206050",
        city:"Ankara",
        state:"Ankara",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Donanım Satışı",value:"4332,4 TL"},
        {type:"Teknik Servis Hizmeti",value:"2232,4 TL"},
        {type:"Diğerleri",value:"50432,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"58"},
        {year:"2021",value:"76"},
        {year:"2022",value:"80"},
        {year:"2023",value:"123"},
      ],
      Orders:[
        {year:"2020",value:"8000"},
        {year:"2021",value:"60500"},
        {year:"2022",value:"12023"},
        {year:"2023",value:"230455"},
      ],
      personelInfo:{
        office:200,
        field:130
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id:7,
      img : {url:'./assets/media/logos/logo2.png'},
      title:"ADMIN",
      type:CompanyTypes.ADMIN,
      adress:{
        addressLine:"Kerim Cad. No: 54 / 50 / 6 Kadıköy",
        city:"İstanbul",
        state:"İstanbul",
        postCode:"4124",
        country:"Türkiye"
      }, 
      incomes:[
        {type:"Donanım Satışı",value:"4332,4 TL"},
        {type:"Teknik Servis Hizmeti",value:"2232,4 TL"},
        {type:"Diğerleri",value:"50432,4 TL"}
      ],
      IDR:[
        {year:"2020",value:"58"},
        {year:"2021",value:"76"},
        {year:"2022",value:"80"},
        {year:"2023",value:"123"},
      ],
      Orders:[
        {year:"2020",value:"8000"},
        {year:"2021",value:"60500"},
        {year:"2022",value:"12023"},
        {year:"2023",value:"230455"},
      ],
      personelInfo:{
        office:200,
        field:130
      },
      sectorInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]


  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(productId: number): any {
    return this.products.find(product => product.id === productId);
  }

  updateProduct(product: any): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
    }
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getCompany(companyId:string):any{
    return null
  }

}
