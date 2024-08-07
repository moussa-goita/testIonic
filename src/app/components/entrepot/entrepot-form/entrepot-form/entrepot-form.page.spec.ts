import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepotFormPage } from './entrepot-form.page';

describe('EntrepotFormPage', () => {
  let component: EntrepotFormPage;
  let fixture: ComponentFixture<EntrepotFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepotFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
