import { Component } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

import { DataService } from '../../../../_fake/fake-data';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  activeTab: string = 'general'; // Varsayılan olarak "Genel" sekmesi aktif
  loading: boolean = false;
  productId: string | null;
  products: Product[] = [];
  product: any; 
  selectedImage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService // Inject your product service
  ) {
    this.productId = null;
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['productId'];
      // Fetch the product details using the product service
      if (productId) {
        this.productId = productId;
        this.product = this.dataService.getProductById(parseInt(productId));
        this.selectedImage = this.product.img.url;
        this.editorData = this.product.description;
      } else {
        this.productId = null;
        this.products = this.dataService.getProducts();
        
      }
    });
  }

  public editorData = '';
  
  public onChange(event: CKEditor4.EventInfo) {
    this.editorData = event.editor.getData();
    console.log(this.editorData);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.loading = true; // Başlangıçta yükleme durumunu aktif hale getirin.

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
      
    }
    
  }
  onImageLoad(): void {
    // Resim yüklendiğinde bu işlev tetiklenir.
    this.loading = false;
    
  }
}
