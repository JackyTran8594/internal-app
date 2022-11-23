import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe, take } from 'rxjs';
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

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    // do something here

  }

  ngOnInit(): void {
    // do something here
    this.formBuilder();
    console.log("init form login");

  }

  login() {
    // do something here
    const formData: any = this.loginForm.value;
    this.authService.login(formData).pipe(take(1)).subscribe({
      next: (res) => {
           console.log(res)
           if(res) {
              this.router.navigate(['/pages/dashboard']);
           }
      }, 
      error: (err) => {
         console.log(err);
      }
    })
  }



}
