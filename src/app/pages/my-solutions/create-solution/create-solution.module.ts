import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSolutionComponent } from './create-solution.component';
import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { MySolutionsComponent } from '../my-solutions.component';



@NgModule({
  declarations: [
    CreateSolutionComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: CreateSolutionComponent,
        },
        { path: ':itemId', component: CreateSolutionComponent }

    ]),
    WidgetsModule,
    ModalsModule,
    SharedModule
  ],
  providers: [MySolutionsComponent],
})
export class CreateSolutionModule { }
