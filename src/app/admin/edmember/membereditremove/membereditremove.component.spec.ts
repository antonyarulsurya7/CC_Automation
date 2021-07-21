import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembereditremoveComponent } from './membereditremove.component';

describe('MembereditremoveComponent', () => {
  let component: MembereditremoveComponent;
  let fixture: ComponentFixture<MembereditremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembereditremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembereditremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
