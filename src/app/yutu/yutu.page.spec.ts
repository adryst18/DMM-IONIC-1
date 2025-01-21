import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YutuPage } from './yutu.page';

describe('YutuPage', () => {
  let component: YutuPage;
  let fixture: ComponentFixture<YutuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YutuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
