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
    { id: 1, name: 'Elektronik',description:'Elektronik Ürünleri',img:{url:'./assets/media/stock/ecommerce/22.gif'},statu:true },
    { id: 2, name: 'Giyim',description:'Giyim Ürünleri',img:{url:'../../assets/media/stock/ecommerce/8.gif'},statu:false},
    { id: 3, name: 'Aksesuar',description:'Aksesuar Ürünleri',img:{url:'../../assets/media/stock/ecommerce/1.gif'},statu:true },
    { id: 5, name: 'Çanta',description:'Çanta Ürünleri',img:{url:'../../assets/media/stock/ecommerce/162.gif'},statu:true },
    { id: 4, name: 'Ayakkabı',description:'Yiyecek Ürünleri',img:{url:'../../assets/media/stock/ecommerce/67.gif'},statu:false },
    // ... other categories
  ];

  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1,img:{url:'./assets/media/stock/ecommerce/22.gif'},sku:10021,qty:5,rating:5,status:true},
    { id: 2, name: 'masaüstü', price: 1000,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1,img:{url:'./assets/media/stock/ecommerce/22.gif'},sku:10021,qty:5,rating:4,status:true },
    { id: 3, name: 'hdd', price: 1000,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1,img:{url:'./assets/media/stock/ecommerce/22.gif'},sku:10021,qty:0,rating:4,status:false },
    { id: 4, name: 'yazıcı', price: 1000,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 1,img:{url:'./assets/media/stock/ecommerce/22.gif'},sku:10021,qty:2,rating:3,status:false },
    { id: 5, name: 'T-Shirt1', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/200.gif'},sku:10021,qty:5,rating:5,status:true },
    { id: 6, name: 'T-Shirt2', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/201.gif'},sku:10021,qty:5,rating:3,status:true },
    { id: 7, name: 'T-Shirt3', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/202.gif'},sku:10021,qty:3,rating:4,status:true },
    { id: 8, name: 'T-Shirt4', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/203.gif'},sku:10021,qty:4,rating:5,status:true },
    { id: 9, name: 'T-Shirt5', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/204.gif'},sku:10021,qty:5,rating:5,status:true },
    { id: 10, name: 'T-Shirt6', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/205.gif'},sku:10021,qty:2,rating:2,status:true },
    { id: 11, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/206.gif'},sku:10021,qty:0,rating:5,status:true },
    { id: 12, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/207.gif'},sku:10021,qty:0,rating:5,status:true },
    { id: 13, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/208.gif'},sku:10021,qty:4,rating:5,status:true },
    { id: 14, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/209.gif'},sku:10021,qty:5,rating:3,status:true },
    { id: 15, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/210.gif'},sku:10021,qty:5,rating:2,status:true },
    { id: 16, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/211.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 17, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/212.gif'},sku:10021,qty:3,rating:2,status:true },
    { id: 18, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/213.gif'},sku:10021,qty:4,rating:3,status:true },
    { id: 19, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/214.gif'},sku:10021,qty:2,rating:2,status:true },
    { id: 20, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/215.gif'},sku:10021,qty:0,rating:4,status:true },
    { id: 21, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/216.gif'},sku:10021,qty:3,rating:5,status:true },
    { id: 22, name: 'T-Shirt7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 2,img:{url:'./assets/media/stock/ecommerce/217.gif'},sku:10021,qty:1,rating:5,status:true },
    { id: 23, name: 'Kolye', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 3,img:{url:'./assets/media/stock/ecommerce/22.gif'},sku:10021,qty:5,rating:2,status:true },
    { id: 24, name: 'Ayakkabı1', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/128.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 25, name: 'Ayakkabı2', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/129.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 26, name: 'Ayakkabı3', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/130.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 27, name: 'Ayakkabı4', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/131.gif'},sku:10021,qty:0,rating:1,status:false },
    { id: 28, name: 'Ayakkabı5', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/132.gif'},sku:10021,qty:2,rating:1,status:false },
    { id: 29, name: 'Ayakkabı6', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/133.gif'},sku:10021,qty:0,rating:1,status:false },
    { id: 30, name: 'Ayakkabı7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/134.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 31, name: 'Ayakkabı8', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 4,img:{url:'./assets/media/stock/ecommerce/135.gif'},sku:10021,qty:5,rating:1,status:true },
    { id: 32, name: 'Çanta1', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/162.gif'},sku:10021,qty:5,rating:3,status:true },
    { id: 33, name: 'Çanta2', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/163.gif'},sku:10021,qty:5,rating:3,status:true },
    { id: 34, name: 'Çanta3', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/164.gif'},sku:10021,qty:5,rating:4,status:true },
    { id: 35, name: 'Çanta4', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/158.gif'},sku:10021,qty:5,rating:5,status:true },
    { id: 36, name: 'Çanta5', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/159.gif'},sku:10021,qty:5,rating:5,status:true },
    { id: 37, name: 'Çanta6', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/160.gif'},sku:10021,qty:5,rating:2,status:true },
    { id: 38, name: 'Çanta7', price: 20,description:'Lorem Ipsum Comfortable sneakers for everyday wear.', categoryId: 5,img:{url:'./assets/media/stock/ecommerce/168.gif'},sku:10021,qty:5,rating:2,status:true },
    // ... other products
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

  getCompany(companyId:Number):Company{
    return this.Companies.filter(company => company.id === companyId)[0];
  }

}
