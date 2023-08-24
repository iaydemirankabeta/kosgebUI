import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobiComponent } from './kobi.component';

describe('KobiComponent', () => {
  let component: KobiComponent;
  let fixture: ComponentFixture<KobiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KobiComponent]
    });
    fixture = TestBed.createComponent(KobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
