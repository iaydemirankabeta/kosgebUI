import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobiProfileComponent } from './kobi-profile.component';

describe('KobiProfileComponent', () => {
  let component: KobiProfileComponent;
  let fixture: ComponentFixture<KobiProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KobiProfileComponent]
    });
    fixture = TestBed.createComponent(KobiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
