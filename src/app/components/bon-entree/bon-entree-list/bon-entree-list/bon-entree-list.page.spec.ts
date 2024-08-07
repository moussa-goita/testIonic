import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntreeListPage } from './bon-entree-list.page';

describe('BonEntreeListPage', () => {
  let component: BonEntreeListPage;
  let fixture: ComponentFixture<BonEntreeListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
