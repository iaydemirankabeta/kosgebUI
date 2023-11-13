import { Component, ViewChild } from '@angular/core';
import { CityService } from './city.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

export interface Adress {
  id: number;
  title: string;
  longAdress: string;
  city: string;
  type: string;
}

@Component({
  selector: 'app-company-adresses',
  templateUrl: './company-adresses.component.html',
  styleUrls: ['./company-adresses.component.scss']
})
export class CompanyAdressesComponent {
  form: FormGroup;
  displayedColumns: string[] = ['Title', 'Type', 'City', 'Action'];
  cities: any[] = [];
  adresses: Adress[] = [
    { id: 1, title: "Merkez", longAdress: "İstanbul", city: "İstanbul", type: "Merkez" },
    { id: 2, title: "İzmit Fabrika", longAdress: "İstanbul", city: "Kocaeli", type: "Fabrika" },
    { id: 2, title: "İnegöl Fabrika", longAdress: "İstanbul", city: "Bursa", type: "Fabrika" },
    { id: 2, title: "Maslak Ofis", longAdress: "İstanbul", city: "İstanbul", type: "Ofis" },

  ];
  selectedAdress: Adress | null = null;
  modalDetailConfig: ModalConfig = {
    modalTitle: "Adres Detayı",
    closeButtonLabel: "Kapat"
  }
  modalDeleteConfig: ModalConfig = {
    modalTitle: "Sil",
  }
  modalAddUpdateConfig: ModalConfig = {
    modalTitle: "Adres Oluştur",
    closeButtonLabel: 'Gönder',
    hideCloseButton: () => true
  }
  @ViewChild('detailModal') private modalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;
  @ViewChild('addUpdateModal') private addEditModalComponent: ModalComponent;
  constructor(private cityService: CityService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      city: ['', Validators.required],
      longAdress: ['', Validators.required],
    })
    this.cityService.getCities().subscribe(res => {
      this.cities = Object.values(res);
    });

  }
  onSubmit() {
    this.selectedAdress = null;
    this.addEditModalComponent.close();
  }
  openAddUpdateModal(item: Adress | null = null) {
    this.selectedAdress = item;
    this.addEditModalComponent.open();
  }
  openDeleteModal(item: Adress) {
    this.selectedAdress = item;
    this.deleteModalComponent.open();
  }
}
