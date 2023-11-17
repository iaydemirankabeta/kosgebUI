import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions.component';
import { ModalsModule } from 'src/app/_metronic/partials';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    SessionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
          path: '',
          component: SessionsComponent,
      },

  ]),
    ModalsModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class SessionsModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'forward_to_inbox',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/forward_to_inbox.svg')
    );
  }
}