import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilliePage } from './billie.page';

describe('BilliePage', () => {
  let component: BilliePage;
  let fixture: ComponentFixture<BilliePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
