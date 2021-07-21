import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfDayComponent } from './half-day.component';

describe('HalfDayComponent', () => {
  let component: HalfDayComponent;
  let fixture: ComponentFixture<HalfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
