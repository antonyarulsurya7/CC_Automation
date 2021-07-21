import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmemberComponent } from './edmember.component';

describe('EdmemberComponent', () => {
  let component: EdmemberComponent;
  let fixture: ComponentFixture<EdmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
