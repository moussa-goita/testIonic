import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorieListPage } from './categorie-list.page';

describe('CategorieListPage', () => {
  let component: CategorieListPage;
  let fixture: ComponentFixture<CategorieListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
