import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacesComponent } from './marketplaces.component';

describe('MarketplacesComponent', () => {
  let component: MarketplacesComponent;
  let fixture: ComponentFixture<MarketplacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplacesComponent]
    });
    fixture = TestBed.createComponent(MarketplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
