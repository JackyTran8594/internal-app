import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'internal-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  formBuilder() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rememberMe: [null, []]
    })
  }

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // do something here

  }

  ngOnInit(): void {
    // do something here
    this.formBuilder();
    console.log("init form login");

  }

  login() {
    // do something here
  }


}
