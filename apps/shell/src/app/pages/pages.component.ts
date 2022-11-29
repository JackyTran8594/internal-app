/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'internal-app-pages',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  // encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit {

  constructor() {
    //do something
  }

  ngOnInit(): void {
    //do something
  }

}
