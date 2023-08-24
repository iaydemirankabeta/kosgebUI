import { Injectable } from '@angular/core';
import { Category } from '../pages/catalog/categories/category.model';
import { Product } from '../pages/catalog/products/products.model';


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
}
