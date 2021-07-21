import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberprofileComponent } from './memberprofile.component';

describe('MemberprofileComponent', () => {
  let component: MemberprofileComponent;
  let fixture: ComponentFixture<MemberprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
