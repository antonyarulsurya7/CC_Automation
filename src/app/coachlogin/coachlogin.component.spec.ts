import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachloginComponent } from './coachlogin.component';

describe('CoachloginComponent', () => {
  let component: CoachloginComponent;
  let fixture: ComponentFixture<CoachloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
