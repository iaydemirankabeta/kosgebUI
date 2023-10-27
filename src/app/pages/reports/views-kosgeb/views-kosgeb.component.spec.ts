import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsKOSGEBComponent } from './views-kosgeb.component';

describe('ViewsKOSGEBComponent', () => {
  let component: ViewsKOSGEBComponent;
  let fixture: ComponentFixture<ViewsKOSGEBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsKOSGEBComponent]
    });
    fixture = TestBed.createComponent(ViewsKOSGEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
