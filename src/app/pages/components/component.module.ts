import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from 'src/app/_metronic/kt/components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    WidgetsModule,
    ModalsModule,
  ],
})
export class componentModule {}
