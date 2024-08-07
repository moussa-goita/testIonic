import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonSortiePrintPage } from './bon-sortie-print.page';

describe('BonSortiePrintPage', () => {
  let component: BonSortiePrintPage;
  let fixture: ComponentFixture<BonSortiePrintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonSortiePrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
