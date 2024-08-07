import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntreePrintPage } from './bon-entree-print.page';

describe('BonEntreePrintPage', () => {
  let component: BonEntreePrintPage;
  let fixture: ComponentFixture<BonEntreePrintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreePrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
