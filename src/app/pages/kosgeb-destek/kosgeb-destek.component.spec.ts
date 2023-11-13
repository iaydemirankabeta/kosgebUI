import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosgebDestekComponent } from './kosgeb-destek.component';

describe('KosgebDestekComponent', () => {
  let component: KosgebDestekComponent;
  let fixture: ComponentFixture<KosgebDestekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KosgebDestekComponent]
    });
    fixture = TestBed.createComponent(KosgebDestekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
