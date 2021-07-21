import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheditandremoveComponent } from './coacheditandremove.component';

describe('CoacheditandremoveComponent', () => {
  let component: CoacheditandremoveComponent;
  let fixture: ComponentFixture<CoacheditandremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheditandremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheditandremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
