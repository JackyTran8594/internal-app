/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internal-app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor() {
    // do something
  }

  ngOnInit(): void {
    // do something
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public dataSet: any[] = [];

}
