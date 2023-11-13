import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationExamplesComponent } from './application-examples.component';
import { RouterModule } from '@angular/router';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';



@NgModule({
  declarations: [
    ApplicationExamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: ApplicationExamplesComponent,
        },
    ]),
    WidgetsModule,
    ModalsModule,
    SharedModule,
    DropdownMenusModule
  ]
})
export class ApplicationExamplesModule { }
