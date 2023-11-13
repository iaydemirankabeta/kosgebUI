import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCallsComponent } from './pending-calls.component';

describe('PendingCallsComponent', () => {
  let component: PendingCallsComponent;
  let fixture: ComponentFixture<PendingCallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingCallsComponent]
    });
    fixture = TestBed.createComponent(PendingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
