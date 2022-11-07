import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internal-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
    // do something
  }

  ngOnInit(): void {
    // do something
  }
}
