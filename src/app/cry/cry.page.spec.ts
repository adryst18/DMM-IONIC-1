import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryPage } from './cry.page';

describe('CryPage', () => {
  let component: CryPage;
  let fixture: ComponentFixture<CryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
