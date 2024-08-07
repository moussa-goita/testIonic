import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilisateurListPage } from './utilisateur-list.page';

describe('UtilisateurListPage', () => {
  let component: UtilisateurListPage;
  let fixture: ComponentFixture<UtilisateurListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
