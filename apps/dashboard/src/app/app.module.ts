import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { NzTableModule } from 'ng-zorro-antd/table';
import { provideSvgIcons } from '@ngneat/svg-icon';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    NzIconModule,
    HttpClientModule,
    HighchartsChartModule,
    NzTableModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [provideSvgIcons([])],
  bootstrap: [AppComponent],
})
export class AppModule {}
