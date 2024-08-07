import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorieFormPage } from './categorie-form.page';

describe('CategorieFormPage', () => {
  let component: CategorieFormPage;
  let fixture: ComponentFixture<CategorieFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
