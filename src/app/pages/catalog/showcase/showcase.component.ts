import { Component } from '@angular/core';
import { DataService } from '../../../_fake/fake-data';
import { Product } from '../products/products.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  products: Product[] = [];

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }

  currentView = 'grid';

  toggleView(view: string) {
    this.currentView = view;
  }

}
