import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilisateurFormPage } from './utilisateur-form.page';

describe('UtilisateurFormPage', () => {
  let component: UtilisateurFormPage;
  let fixture: ComponentFixture<UtilisateurFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
