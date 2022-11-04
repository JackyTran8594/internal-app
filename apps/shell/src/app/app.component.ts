import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'internal-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'shell';

  ngOnInit(): void {
    console.log("shell");
  }
}
