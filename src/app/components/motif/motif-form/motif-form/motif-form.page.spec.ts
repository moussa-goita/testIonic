import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotifFormPage } from './motif-form.page';

describe('MotifFormPage', () => {
  let component: MotifFormPage;
  let fixture: ComponentFixture<MotifFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
