import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdressesComponent } from './company-adresses.component';

describe('CompanyAdressesComponent', () => {
  let component: CompanyAdressesComponent;
  let fixture: ComponentFixture<CompanyAdressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyAdressesComponent]
    });
    fixture = TestBed.createComponent(CompanyAdressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
