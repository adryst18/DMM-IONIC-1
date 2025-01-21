import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiktokPage } from './tiktok.page';

describe('TiktokPage', () => {
  let component: TiktokPage;
  let fixture: ComponentFixture<TiktokPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
