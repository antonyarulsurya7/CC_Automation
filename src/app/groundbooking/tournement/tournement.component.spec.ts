import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournementComponent } from './tournement.component';

describe('TournementComponent', () => {
  let component: TournementComponent;
  let fixture: ComponentFixture<TournementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
