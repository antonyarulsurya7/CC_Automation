import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcoachComponent } from './edcoach.component';

describe('EdcoachComponent', () => {
  let component: EdcoachComponent;
  let fixture: ComponentFixture<EdcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
