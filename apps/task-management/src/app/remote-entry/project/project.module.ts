import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { IconsProviderModule, NgZorroModule } from '@internal-app/theme';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    IconsProviderModule,
    NgZorroModule,
  ],
})
export class ProjectModule {}
