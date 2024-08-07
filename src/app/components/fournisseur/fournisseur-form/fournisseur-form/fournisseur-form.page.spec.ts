import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FournisseurFormPage } from './fournisseur-form.page';

describe('FournisseurFormPage', () => {
  let component: FournisseurFormPage;
  let fixture: ComponentFixture<FournisseurFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
