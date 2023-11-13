import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ExtrasModule } from '../../_metronic/partials';
import { PaginationService } from '../service/pagination.service';
import { CatalogComponent } from './catalog.component';
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SearchComponent } from '../../pages/components/search/search.component';
import { CurrencyComponent } from './currency/currency.component';
import { MarketplacesComponent } from './marketplaces/marketplaces.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from "../../_metronic/shared/shared.module";


@NgModule({
    declarations: [CatalogComponent, ProductsComponent, CategoriesComponent, ProductAddComponent, ShowcaseComponent, SearchComponent, CurrencyComponent, MarketplacesComponent, ProductDetailComponent],
    providers: [PaginationService],
    imports: [
        ExtrasModule,
        CKEditorModule,
        FormsModule,
        MatTableModule,
        MatTabsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'katalog',
                component: CatalogComponent,
            },
            {
                path: 'vitrin',
                component: ShowcaseComponent,
            },
            {
                path: 'urunler',
                component: ProductsComponent,
            },
            {
                path: 'urun-ekle',
                component: ProductAddComponent,
            },
            {
                path: 'kategoriler',
                component: CategoriesComponent,
            },
            {
                path: 'pazar-yerleri',
                component: MarketplacesComponent,
            },
            { path: 'urunler/:categoryId', component: ProductsComponent },
            { path: 'urun-ekle/:productId', component: ProductAddComponent },
            { path: 'urun-detay/:productId', component: ProductDetailComponent }
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule
    ]
})
export class catalogModule {}
