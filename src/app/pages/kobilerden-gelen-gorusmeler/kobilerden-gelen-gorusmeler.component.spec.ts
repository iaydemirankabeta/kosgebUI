import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KobilerdenGeleneGorusmelerComponent } from './kobilerden-gelen-gorusmeler.component';

describe('BiGonderilenGorusmelerComponentComponent', () => {
  let component: KobilerdenGeleneGorusmelerComponent;
  let fixture: ComponentFixture<KobilerdenGeleneGorusmelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KobilerdenGeleneGorusmelerComponent]
    });
    fixture = TestBed.createComponent(KobilerdenGeleneGorusmelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
