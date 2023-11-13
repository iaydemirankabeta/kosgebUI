import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  @Input() product: any; // Replace 'any' with your product model
  @Input() cartItems: any[] = []; // Replace 'any' with your cart item model
  displayCart: boolean = false;
  @Input() index: number; // Bu satırı ekleyin

  constructor() {
    // Initialize cartItems with example data
   // Initialize cartItems with example data


  }

  ngOnInit(){
    this.cartItems = [
      {
        product: {
          name: 'Tablet',
          sku: 'SKU001',
          img: { url: './assets/media/stock/ecommerce/tablet.png' },
          price: 25.99,
          qty: 10 // Maximum quantity for this product
        },
        quantity: 2
      },
      {
        product: {
          name: 'Klavye',
          sku: 'SKU002',
          img: { url: './assets/media/stock/ecommerce/klavye.jpg' },
          price: 19.99,
          qty: 5 // Maximum quantity for this product
        },
        quantity: 1
      }
      // Add more items as needed
    ];
  }

  showCartView() {
    this.displayCart = !this.displayCart;
  }
  

  cartQuantity: number = 1;
  decrementQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  incrementQuantity(index: number) {
    if (this.cartItems[index].quantity < this.cartItems[index].product.qty) {
      this.cartItems[index].quantity++;
    }
  }

  qualityInput(index: number) {
    if (this.cartItems[index].quantity > this.cartItems[index].product.qty) {
      this.cartItems[index].quantity = this.cartItems[index].product.qty;
    }
  }

removeItem(item: any) {
  const index = this.cartItems.findIndex((cartItem) => cartItem === item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }}

  
}
