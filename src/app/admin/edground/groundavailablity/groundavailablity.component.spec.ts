import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundavailablityComponent } from './groundavailablity.component';

describe('GroundavailablityComponent', () => {
  let component: GroundavailablityComponent;
  let fixture: ComponentFixture<GroundavailablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundavailablityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundavailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
