import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DosisPage } from './dosis.page';

describe('DosisPage', () => {
  let component: DosisPage;
  let fixture: ComponentFixture<DosisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
