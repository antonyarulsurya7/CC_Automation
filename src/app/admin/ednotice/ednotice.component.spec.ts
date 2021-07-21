import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdnoticeComponent } from './ednotice.component';

describe('EdnoticeComponent', () => {
  let component: EdnoticeComponent;
  let fixture: ComponentFixture<EdnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
