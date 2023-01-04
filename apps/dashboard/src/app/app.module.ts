import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule, ThemeModule } from '@internal-app/theme';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
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
