import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofileComponent } from './coachprofile.component';

describe('CoachprofileComponent', () => {
  let component: CoachprofileComponent;
  let fixture: ComponentFixture<CoachprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
