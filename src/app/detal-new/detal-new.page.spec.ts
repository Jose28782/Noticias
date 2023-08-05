import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalNEWPage } from './detal-new.page';

describe('DetalNEWPage', () => {
  let component: DetalNEWPage;
  let fixture: ComponentFixture<DetalNEWPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalNEWPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
