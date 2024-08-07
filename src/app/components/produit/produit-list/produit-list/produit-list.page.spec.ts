import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitListPage } from './produit-list.page';

describe('ProduitListPage', () => {
  let component: ProduitListPage;
  let fixture: ComponentFixture<ProduitListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
