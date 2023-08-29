import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { Company } from 'src/app/models/Company.model';
import { AuthService } from 'src/app/modules/auth';
import { DataService } from 'src/app/_fake/fake-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedCompany:Company | null = null
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  
  constructor(private auth:AuthService,private dataService:DataService) {
    var companyId = auth.currentUserValue?.selectedCompany?.company.id || 1
    this.selectedCompany = dataService.getCompany(companyId || 1);
  }
  @ViewChild('modal') private modalComponent: ModalComponent;
  async openModal() {
    return await this.modalComponent.open();
  }
}
