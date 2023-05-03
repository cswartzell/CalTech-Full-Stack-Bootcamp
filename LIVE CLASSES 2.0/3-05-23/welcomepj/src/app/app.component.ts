import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first_name: string = "Cameron";
  last_name: string = "Swartzell";
  age: number = 370
  //Yay, I did a date
  birthday: Date = new Date('1985-10-28');
  alive: boolean = true;
  //Null or udnefined?
  death_date: Date = new Date()
}
