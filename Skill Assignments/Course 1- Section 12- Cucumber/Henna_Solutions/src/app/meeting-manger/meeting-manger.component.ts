import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meeting-manger',
  templateUrl: './meeting-manger.component.html',
  styleUrls: ['./meeting-manger.component.css']
})
export class MeetingMangerComponent implements OnInit {

  meetings = this.meetingsService.getMeetings();

  showMeetings = true;

  categories = [
    { title: "Meet & Greet" },
    { title: "Design Consult" },
    { title: "Planning" },
    { title: "Questions" },
  ]

  meetingForm = new FormGroup(
    {
      date: new FormControl('1/1/2023'),
      time: new FormControl("12:30pm"),
      attending: new FormControl('Client Name'),
      category: new FormControl(this.categories[0])
    }
  );

  constructor(private meetingsService: MeetingsService) {

  }


  addMeetingToDB() {

  }

  ngOnInit(): void {
  }
}