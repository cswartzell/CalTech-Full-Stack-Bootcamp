import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = "NA";
  email: string = "NA";

  //dependency injection for route
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const title = "My Profile";
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.email = params['email']
    })
  }
}
