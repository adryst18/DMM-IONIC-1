import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdelePage } from './adele.page';

describe('AdelePage', () => {
  let component: AdelePage;
  let fixture: ComponentFixture<AdelePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdelePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
