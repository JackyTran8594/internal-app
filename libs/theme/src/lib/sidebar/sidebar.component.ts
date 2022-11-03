import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'internal-app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  
  constructor() {
    // do something
  }

  ngOnInit(): void {
    // do something
  }
}
