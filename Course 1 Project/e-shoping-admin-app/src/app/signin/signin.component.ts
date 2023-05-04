import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //form builder method
  loginRef!: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) { } //DI for FormBuilder
  ngOnInit(): void {
    this.loginRef = this.formBuilder.group({
      emailid: [],
      password: []
    });
  }

  signIn() {
    let login = this.loginRef.value;
    if (this.authService.signIn(login)) {
      alert("logged in")
    } else {
      alert("Failed to Log In. Check email and password")
    }
    this.loginRef.reset();
  }
}
