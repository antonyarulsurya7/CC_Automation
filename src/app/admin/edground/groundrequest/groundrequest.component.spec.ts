import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundrequestComponent } from './groundrequest.component';

describe('GroundrequestComponent', () => {
  let component: GroundrequestComponent;
  let fixture: ComponentFixture<GroundrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
