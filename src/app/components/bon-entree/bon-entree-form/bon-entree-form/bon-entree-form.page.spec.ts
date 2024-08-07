import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntreeFormPage } from './bon-entree-form.page';

describe('BonEntreeFormPage', () => {
  let component: BonEntreeFormPage;
  let fixture: ComponentFixture<BonEntreeFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
