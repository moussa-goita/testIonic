import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FournisseurListPage } from './fournisseur-list.page';

describe('FournisseurListPage', () => {
  let component: FournisseurListPage;
  let fixture: ComponentFixture<FournisseurListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
