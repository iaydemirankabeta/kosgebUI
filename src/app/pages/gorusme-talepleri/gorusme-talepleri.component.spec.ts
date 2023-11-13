import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorusmeTalepleriComponent } from './gorusme-talepleri.component';

describe('GorusmeTalepleriComponent', () => {
  let component: GorusmeTalepleriComponent;
  let fixture: ComponentFixture<GorusmeTalepleriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GorusmeTalepleriComponent]
    });
    fixture = TestBed.createComponent(GorusmeTalepleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
