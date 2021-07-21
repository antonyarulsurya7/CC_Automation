import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoachComponent } from './addcoach.component';

describe('AddcoachComponent', () => {
  let component: AddcoachComponent;
  let fixture: ComponentFixture<AddcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
