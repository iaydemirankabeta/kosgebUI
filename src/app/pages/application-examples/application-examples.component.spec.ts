import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationExamplesComponent } from './application-examples.component';

describe('ApplicationExamplesComponent', () => {
  let component: ApplicationExamplesComponent;
  let fixture: ComponentFixture<ApplicationExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationExamplesComponent]
    });
    fixture = TestBed.createComponent(ApplicationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
