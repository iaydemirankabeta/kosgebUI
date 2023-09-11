import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobiCozumleriComponent } from './kobi-cozumleri.component';

describe('KobiCozumleriComponent', () => {
  let component: KobiCozumleriComponent;
  let fixture: ComponentFixture<KobiCozumleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KobiCozumleriComponent]
    });
    fixture = TestBed.createComponent(KobiCozumleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
