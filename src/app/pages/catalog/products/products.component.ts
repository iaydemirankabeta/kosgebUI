import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../_fake/fake-data';
import { Product } from './products.model';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { AuthService, UserType } from 'src/app/modules/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categoryId: string | null;
  searchTerm: string ;
  reload: EventEmitter<boolean> = new EventEmitter();
  recordsPerPage: number = 5;
  @Input() selectedCurrency: string = '₺';
  nextButtonDisabled = false;
  dataTotalItems = 0; 
  
  onCurrencySelected(currency: string) {
    this.selectedCurrency = currency;
  }

  user$: Observable<UserType>;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private dataService: DataService,
  ) {
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

    this.loadData();
    
  }

  loadData(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.categoryId = categoryId;
        this.products = this.dataService.getProductsByCategory(parseInt(categoryId));
      } else {
        this.categoryId = null;
        this.products = this.dataService.getProducts();
      }

    });
  }


  onSearchInputChange($event: any) {
    this.searchTerm = $event.target.value;
    this.filterProductsBySearchTerm();
  }

  filterProductsBySearchTerm() {
    this.loadData();
    if (this.searchTerm.trim() === '') {
      // Arama terimi boşsa veya sadece boşluklardan oluşuyorsa tüm ürünleri göster
      this.products = this.categoryId
        ? this.dataService.getProductsByCategory(parseInt(this.categoryId))
        : this.dataService.getProducts();
    } else {
      // Arama terimi doluysa ürünleri terime göre filtrele
      
      this.products = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  modalcancelConfig: ModalConfig = {
    modalTitle: "Ürün'ü Pasife Alıyorsunuz!",
    dismissButtonLabel: 'Evet',
    closeButtonLabel: 'İptal',

  };

  modalReviseConfig: ModalConfig = {
    modalTitle: "Reddetme Sebebi!",
    dismissButtonLabel: 'Gönder',
    closeButtonLabel: 'İptal',

  };
  
  @ViewChild('modalCancel') private modalCancelComponent: ModalComponent;
  @ViewChild('ReviseComponent') private ReviseModalComponent: ModalComponent;
  
  async openModal() {
    return await this.modalCancelComponent.open();
  }

  async reviseModal(){
    return await this.ReviseModalComponent.open();

  }

  
}
