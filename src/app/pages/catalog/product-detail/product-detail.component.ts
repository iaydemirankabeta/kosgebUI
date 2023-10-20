import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../../_fake/fake-data';
import { ActivatedRoute } from '@angular/router';
import { Product,Comment } from '../products/products.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  activeTab: string = 'general'; // Varsayılan olarak "Genel" sekmesi aktif
  loading: boolean = false;
  productId: string | null;
  products: Product[] = [];

  @Input() index: number; // Add this line
  @Input() cartItems: any[] = [];


  product: any; 
  selectedImage: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService // Inject your product service
  ) {
    this.productId = null;
  }

  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['productId'];
      // Fetch the product details using the product service
      if (productId) {
        this.productId = productId;
        this.product = this.dataService.getProductById(parseInt(productId));
        this.selectedImage = this.product.img.url;
      } else {
        this.productId = null;
        this.products = this.dataService.getProducts();
        
      }
    });
  }


  comments: Comment[] = [
    {
      id: 1,
      author: 'Hasan Oruç',
      text: 'Çok iyi Ürün!',
      date: new Date('2023-10-19'),
    },
    {
      id: 2,
      author: 'Gizem Turhanlı',
      text: 'Çok sevdim!',
      date: new Date('2023-10-20'),
    },
  ];

  newComment: Comment = {
    id: 0,
    author: '',
    text: '',
    date: new Date(),
  };

  addComment() {
    if (this.newComment.author.trim() === '' || this.newComment.text.trim() === '') {
      alert('Lütfen Bilgileri Giriniz');
      return;
    }

    this.newComment.id = this.comments.length + 1;
    this.newComment.date = new Date();
    this.comments.push({ ...this.newComment });
    this.newComment.author = '';
    this.newComment.text = '';
  }

  cartQuantity: number = 1;
  incrementQuantity(index: number) {
    if (this.cartQuantity < this.product.qty) {
      this.cartQuantity++;
    }
  }

  qualityInput(index: number) {
    if (this.cartQuantity > this.product.qty) {
      this.cartQuantity = this.product.qty;
    }
  }

  decrementQuantity(index: number) {
    if (this.cartQuantity > 1) {
      this.cartQuantity--;
    }
  }

  addToCart() {
    // Check if the selected product is not already in the cart
    const productIndex = this.cartItems.findIndex((item) => item.product.id === this.product.id);
  
    if (productIndex !== -1) {
      // Update quantity if the product is already in the cart
      this.cartItems[productIndex].quantity += this.cartQuantity;
    } else {
      // Add the product to the cartItems array
      this.cartItems.push({
        product: this.product,
        quantity: this.cartQuantity
      });
    }
  
    // Reset the cartQuantity
    this.cartQuantity = 1;
  
    
  }


}
