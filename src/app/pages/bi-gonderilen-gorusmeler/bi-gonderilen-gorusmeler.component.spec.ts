import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiGonderilenGorusmelerComponent } from './bi-gonderilen-gorusmeler.component';

describe('BiGonderilenGorusmelerComponentComponent', () => {
  let component: BiGonderilenGorusmelerComponent;
  let fixture: ComponentFixture<BiGonderilenGorusmelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiGonderilenGorusmelerComponent]
    });
    fixture = TestBed.createComponent(BiGonderilenGorusmelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
