export interface Product {
    id: number;
    name: string;
    description:string;
    price: number;
    categoryId: number;
    img:{ url: string };
    sku:number;
    qty:number;
    rating:number;
    status:boolean;
  }