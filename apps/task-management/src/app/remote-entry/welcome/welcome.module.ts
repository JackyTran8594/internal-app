import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IconsProviderModule, NgZorroModule } from '@internal-app/theme';
import { WelcomeComponent } from './welcome.component';
import { TableViewComponent } from './table-view/table-view.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { registerLocaleData } from '@angular/common';
import vn from '@angular/common/locales/en';
import { BoardTaskFormComponent } from './board-view/board-task-form/board-task-form.component';
registerLocaleData(vn);

@NgModule({
  declarations: [
    WelcomeComponent,
    TableViewComponent,
    BoardViewComponent,
    TimelineComponent,
    BoardTaskFormComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NgZorroModule,
    DragDropModule,
    FormsModule,
    IconsProviderModule,
    // NzDatePickerModule,
    HighchartsChartModule,
  ],
})
export class WelcomeModule {}
