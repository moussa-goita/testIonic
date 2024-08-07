import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleListPage } from './role-list.page';

describe('RoleListPage', () => {
  let component: RoleListPage;
  let fixture: ComponentFixture<RoleListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
