import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internal-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {
    // do something here
  }

  ngOnInit(): void {
    // do something here

    console.log("init form login");
  }
}
