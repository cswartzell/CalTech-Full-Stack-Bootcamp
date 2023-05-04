import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //form builder method
  loginRef?: FormGroup;

  constructor(public formBuilder: FormBuilder) { } //DI for FormBuilder
  ngOnInit(): void {
    this.loginRef = this.formBuilder.group({
      emailid: [],
      password: []
    });
  }

}
