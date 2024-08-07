import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitFormPage } from './produit-form.page';

describe('ProduitFormPage', () => {
  let component: ProduitFormPage;
  let fixture: ComponentFixture<ProduitFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
