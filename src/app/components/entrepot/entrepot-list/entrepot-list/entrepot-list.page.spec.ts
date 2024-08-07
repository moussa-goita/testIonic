import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepotListPage } from './entrepot-list.page';

describe('EntrepotListPage', () => {
  let component: EntrepotListPage;
  let fixture: ComponentFixture<EntrepotListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepotListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
