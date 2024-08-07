import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotifListPage } from './motif-list.page';

describe('MotifListPage', () => {
  let component: MotifListPage;
  let fixture: ComponentFixture<MotifListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
