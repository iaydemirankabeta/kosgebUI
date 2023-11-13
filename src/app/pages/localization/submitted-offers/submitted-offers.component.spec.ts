import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedOffersComponent } from './submitted-offers.component';

describe('SubmittedOffersComponent', () => {
  let component: SubmittedOffersComponent;
  let fixture: ComponentFixture<SubmittedOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmittedOffersComponent]
    });
    fixture = TestBed.createComponent(SubmittedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
