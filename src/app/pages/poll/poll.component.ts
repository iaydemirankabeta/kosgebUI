import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { MatTableDataSource } from '@angular/material/table';


export interface Pool {
  id: number;
  title: string;
  questions: Question[];
  lastDate: Date;
}

interface Question {
  id: number;
  title: string;
}

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent {
  startDate: Date = new Date(1991, 1);

  sektorler = new MatTableDataSource([
    { id: 1, tip: "Gıda" },
    { id: 2, tip: "İnşaat" },
    { id: 3, tip: "Tekstil" },
    { id: 4, tip: "Kozmetik" },
    { id: 5, tip: "Teknoloji" },
    { id: 6, tip: "Hububat (Tahıl)" },
  ])
  ulkeler = new MatTableDataSource([
    { id: 1, tip: "Türkiye" },
    { id: 2, tip: "Amerika" },
    { id: 3, tip: "Çin" },
    { id: 4, tip: "Rusya" },
    { id: 5, tip: "Fransa" },
  ])
  sirketler = new MatTableDataSource([
    { id: 1, tip: "X" },
    { id: 2, tip: "Y" },
    { id: 3, tip: "z" },
  ])
  oranlar = new MatTableDataSource([
    { id: 1, tip: "%30" },
    { id: 2, tip: "%40" },
    { id: 3, tip: "%50" },
    { id: 4, tip: "%60" },
    { id: 5, tip: "%70" },
    { id: 6, tip: "%80" },
    { id: 7, tip: "%90" },
    { id: 8, tip: "%100" },
  ])
  selectedSektor: string = 'Gıda';
  selectedUlke: string = 'Türkiye';
  selectedOran: string = '%30';
  selectedSirket: string = 'X';

  endDateChange(item: any) {
    this.startDate = new Date(item.target.value)

    this.getApplicationsByFilter();
  }
  getApplicationsByFilter() {
    throw new Error('Method not implemented.');
  }
  changesektor(event: any) {
    this.selectedSektor = event.target.value; // Seçilen değeri değişkene ata
  }
  changeulke(event: any) {
    this.selectedUlke = event.target.value; // Seçilen değeri değişkene ata
  }
  changesirket(event: any) {
    this.selectedSirket = event.target.value; // Seçilen değeri değişkene ata
  }
  changeoran(event: any) {
    this.selectedOran = event.target.value; // Seçilen değeri değişkene ata
  }
  displayedColumns: string[] = ['Id', 'Title', 'LastDate', 'Action'];
  Pools: Pool[] = [
    {
      id: 1,
      title: "Almanya Gezisi hk.",
      lastDate: new Date("2021-09-23"),
      questions: [
        {
          id: 1, title: "Almanya' da Gıda sektöründe faliyet gösteren X şirketi için düzenlenen %30 KOSGEB destekli iş gezisine katılım sağlamak ister misiniz?"
        },
      ]
    }
  ]
  counter: number[] = [1]
  selectedPool: Pool | null = null
  createModalConfig: ModalConfig = {
    modalTitle: "Anket Oluştur",
    closeButtonLabel: 'Gönder',
    onDismiss: () => {
      this.counter = [1];
      return true;
    },
    hideCloseButton: () => true
  }

  successModalConfig: ModalConfig = {
    modalTitle: "Başarılı",
    closeButtonLabel: "Kapat"
  }

  detailModalConfig: ModalConfig = {
    modalTitle: "Anket Detayı",
    closeButtonLabel: "Kapat"
  }

  deleteModalConfig: ModalConfig = {
    modalTitle: "Sil",
  }

  @ViewChild('createModal') private createModalComponent: ModalComponent;
  @ViewChild('successModal') private successModalComponent: ModalComponent;
  @ViewChild('detailModal') private detailModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;
  selectedType: any;
  change(item: any) {
    this.selectedType = item.target.value;
  }

  openCreateModal() {
    this.createModalComponent.open();
  }
  openSuccessModal() {
    this.createModalComponent.close();
    this.successModalComponent.open();
  }
  openDetailModal(pool: Pool) {
    this.selectedPool = pool;
    this.detailModalComponent.open();
  }
  openDeleteModal() {
    this.deleteModalComponent.open();
  }
  closeDeleteModal() {
    this.deleteModalComponent.close();
  }
  counterUpdate() {
    this.counter.push(this.counter.length + 1);
  }
}
