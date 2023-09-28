import { Component, ViewChild } from '@angular/core';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

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
  displayedColumns: string[] = ['Id', 'Title', 'LastDate' , 'Action'];
  Pools: Pool[] = [
    {
      id: 1,
      title: "Almanya Gezisi hk.",
      lastDate: new Date("2021-09-23"),
      questions: [
        {
          id: 1, title: "Almanya Frankfurt bölgesine teknik gezi yapılması durumunda katılır mıydınız?"
        },
      ]
    }
  ]
  counter:number[]=[1]
  selectedPool: Pool | null = null
  createModalConfig: ModalConfig={
    modalTitle: "Anket Oluştur",
    closeButtonLabel: 'Gönder',
    onDismiss: () => {
      this.counter = [1];
      return true;
    }
  }

  successModalConfig: ModalConfig={
    modalTitle:"Başarılı",
    closeButtonLabel:"Kapat"
  }

  detailModalConfig: ModalConfig={
    modalTitle:"Anket Detayı",
    closeButtonLabel:"Kapat"
  }

  deleteModalConfig:ModalConfig={
    modalTitle:"Sil",
  }

  @ViewChild('createModal') private createModalComponent: ModalComponent;
  @ViewChild('successModal') private successModalComponent: ModalComponent;
  @ViewChild('detailModal') private detailModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;

  openCreateModal() {
    this.createModalComponent.open();
  }
  openSuccessModal() {
    this.createModalComponent.close();
    this.successModalComponent.open();
  }
  openDetailModal(pool:Pool){
    this.selectedPool = pool;
    this.detailModalComponent.open();
  }
  openDeleteModal(){
    this.deleteModalComponent.open();
  }
  closeDeleteModal(){
    this.deleteModalComponent.close();
  }
  counterUpdate() {
    this.counter.push(this.counter.length+1);
}
}
