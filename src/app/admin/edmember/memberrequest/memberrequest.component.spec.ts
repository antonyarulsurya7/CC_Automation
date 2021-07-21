import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberrequestComponent } from './memberrequest.component';

describe('MemberrequestComponent', () => {
  let component: MemberrequestComponent;
  let fixture: ComponentFixture<MemberrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
