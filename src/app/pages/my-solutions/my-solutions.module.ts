import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySolutionsComponent } from './my-solutions.component';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';



@NgModule({
  declarations: [
    MySolutionsComponent
  ],
  imports: [
    CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MySolutionsComponent,
            },
        ]),
        WidgetsModule,
        ModalsModule,
        SharedModule,
        DropdownMenusModule
  ],
  
})
export class MySolutionsModule { }
