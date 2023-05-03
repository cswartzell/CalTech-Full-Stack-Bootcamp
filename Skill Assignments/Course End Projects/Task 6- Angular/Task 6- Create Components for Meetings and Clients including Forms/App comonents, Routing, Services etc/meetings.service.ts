import { Injectable } from '@angular/core';
import { Meeting } from './modal/Meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  meetings: Meeting[] = [
    new Meeting(new Date("1-10-2023"), "1:00pm", "John Smith", "Design Consult"),
    new Meeting(new Date("1-10-2023"), "2:00pm", "John Smith", "Planning"),
    new Meeting(new Date("1-23-2023"), "10:00am", "John Smith", "Plan Approval"),
  ];

  getMeetings() {
    return this.meetings;
  }

  constructor() { }
}
