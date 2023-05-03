import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingMangerComponent } from './meeting-manger.component';

describe('MeetingMangerComponent', () => {
  let component: MeetingMangerComponent;
  let fixture: ComponentFixture<MeetingMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
