import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgroundComponent } from './edground.component';

describe('EdgroundComponent', () => {
  let component: EdgroundComponent;
  let fixture: ComponentFixture<EdgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
