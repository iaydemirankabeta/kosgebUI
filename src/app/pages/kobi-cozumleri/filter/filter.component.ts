import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from 'src/environments/environment';
import { FilterService } from './kobiFilter.service';
import { ModalComponent } from 'src/app/_metronic/partials';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;

  selectedFilters: { [key: string]: string | null } = {};
  
  @Input() kobiFilter: any[] = [];
  @Input() filterOptions: any[] = [];

  @Output() filterChanged = new EventEmitter<any>();
form: FormGroup<any>;

  constructor(private filterService: FilterService,private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedValue: ['option1'] 
    });
  
  }

  ngOnInit() {
    this.kobiFilter = this.filterService.getKobiFilter();
    this.initializeSelectedFilters();
    // You can perform other necessary tasks here
  }

  initializeSelectedFilters() {
    for (const filterGroup of this.kobiFilter) {
      this.selectedFilters[filterGroup.name] = null; // Null değeri ile başlatıyoruz
    }
    this.emitFilterChanges();
  }
  @ViewChild('modal') private modalComponent: ModalComponent;
  closeModal(){
    return this.modalComponent.close();
  }


  onFilterChange(filterName: string, value: string | any) {
    this.selectedFilters[filterName] = value.target.value;
    this.emitFilterChanges();
  }

  emitFilterChanges() {
    this.filterChanged.emit(this.selectedFilters);
  }

  
  onReset(){
    this.form.reset();
    return this.ngOnInit();
  }

  
  

  

}
