import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachrequestComponent } from './coachrequest.component';

describe('CoachrequestComponent', () => {
  let component: CoachrequestComponent;
  let fixture: ComponentFixture<CoachrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
