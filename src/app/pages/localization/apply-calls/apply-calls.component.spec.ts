import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCallsComponent } from './apply-calls.component';

describe('ApplyCallsComponent', () => {
  let component: ApplyCallsComponent;
  let fixture: ComponentFixture<ApplyCallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyCallsComponent]
    });
    fixture = TestBed.createComponent(ApplyCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
