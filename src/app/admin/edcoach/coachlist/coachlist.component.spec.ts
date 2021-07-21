import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachlistComponent } from './coachlist.component';

describe('CoachlistComponent', () => {
  let component: CoachlistComponent;
  let fixture: ComponentFixture<CoachlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
