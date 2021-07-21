import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachregistrationComponent } from './coachregistration.component';

describe('CoachregistrationComponent', () => {
  let component: CoachregistrationComponent;
  let fixture: ComponentFixture<CoachregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
