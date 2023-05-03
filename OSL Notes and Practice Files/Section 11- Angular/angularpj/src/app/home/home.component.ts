import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //using input decorator/directive
  // name will get its data from its parent component 
  @Input() name = 'NA';

  //dependency injection for route
  constructor() { }

  ngOnInit(): void { }
}
