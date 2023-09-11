import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleGroupsComponent } from './role-groups.component';

describe('RoleGroupsComponent', () => {
  let component: RoleGroupsComponent;
  let fixture: ComponentFixture<RoleGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleGroupsComponent]
    });
    fixture = TestBed.createComponent(RoleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
