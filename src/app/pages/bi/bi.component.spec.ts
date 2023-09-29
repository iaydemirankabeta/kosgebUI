import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiComponent } from './bi.component';

describe('BiComponent', () => {
  let component: BiComponent;
  let fixture: ComponentFixture<BiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiComponent]
    });
    fixture = TestBed.createComponent(BiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
