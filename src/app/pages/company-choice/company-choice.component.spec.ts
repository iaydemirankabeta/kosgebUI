import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyChoiceComponent } from './company-choice.component';

describe('CompanyChoiceComponent', () => {
  let component: CompanyChoiceComponent;
  let fixture: ComponentFixture<CompanyChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyChoiceComponent]
    });
    fixture = TestBed.createComponent(CompanyChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
