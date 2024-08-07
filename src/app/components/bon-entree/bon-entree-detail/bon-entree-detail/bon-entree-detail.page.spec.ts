import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntreeDetailPage } from './bon-entree-detail.page';

describe('BonEntreeDetailPage', () => {
  let component: BonEntreeDetailPage;
  let fixture: ComponentFixture<BonEntreeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
