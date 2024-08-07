import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleFormPage } from './role-form.page';

describe('RoleFormPage', () => {
  let component: RoleFormPage;
  let fixture: ComponentFixture<RoleFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
