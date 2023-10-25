export interface Product {
    id: number;
    name: string;
    description:string;
    price: number;
    categoryId: number;
    img:{ url: string };
    sku:number;
    qty:number;
    offerQty:number;
    rating:number;
    status:boolean;
    priceTRY:number;
    priceUSD:number;
    priceEURO:number;
  }

  export interface Comment {
    id: number;
    author: string;
    text: string;
    date: Date;
  }