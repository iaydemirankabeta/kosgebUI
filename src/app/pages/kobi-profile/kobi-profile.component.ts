import { Component, ViewChild } from '@angular/core';
import { KobiProfileService } from './kobi-profile.service';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-kobi-profile',
  templateUrl: './kobi-profile.component.html',
  styleUrls: ['./kobi-profile.component.scss']
})
export class KobiProfileComponent {
  selectedKobi:any = null;
  selectedPhoto = 1;
  slides = [
    {'image': '../../../assets/media/fabrika/fabrika1.png'}, 
    {'image': '../../../assets/media/fabrika/fabrika2.png'}, 
    {'image': '../../../assets/media/fabrika/fabrika3.jpg'}, 
  ];
  constructor(private kobiProfileService : KobiProfileService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['itemId'];
      this.selectedKobi = this.kobiProfileService.fakeBusinesses.filter((x:any) => x.id == Number(itemId))[0]
    });
  }
  contactModalConfig : ModalConfig={
    modalTitle: "İletişim",
    closeButtonLabel: 'Kapat',
    hideDismissButton: () => true
  }
  fabrikaModalConfig : ModalConfig={
    modalTitle: "Fabrika",
    closeButtonLabel: 'Kapat',
    hideDismissButton: () => true

  }
  @ViewChild('contactModal') private contactModalComponent: ModalComponent;
  @ViewChild('fabrikaModal') private fabrikaModalComponent: ModalComponent;

  openContactModal(){
    this.contactModalComponent.open();
  }
  openFabrikaModal(){
    this.fabrikaModalComponent.open();
  }
  selectedPhotoChange(type:number){
    if(this.selectedPhoto === 3 && type === 2){
      this.selectedPhoto = 1
      return;
    }
    if(this.selectedPhoto === 1 && type === 1 ){
      this.selectedPhoto = 3
      return;
    }
    type === 1 ? this.selectedPhoto-- : this.selectedPhoto++;
  }
}
