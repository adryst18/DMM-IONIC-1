import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PelisPage } from './pelis.page';

describe('PelisPage', () => {
  let component: PelisPage;
  let fixture: ComponentFixture<PelisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
