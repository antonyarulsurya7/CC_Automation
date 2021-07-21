import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDayComponent } from './full-day.component';

describe('FullDayComponent', () => {
  let component: FullDayComponent;
  let fixture: ComponentFixture<FullDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
