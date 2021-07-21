import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundbookedComponent } from './groundbooked.component';

describe('GroundbookedComponent', () => {
  let component: GroundbookedComponent;
  let fixture: ComponentFixture<GroundbookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundbookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
