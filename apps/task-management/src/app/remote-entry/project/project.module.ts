import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { IconsProviderModule, NgZorroModule } from '@internal-app/theme';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [ProjectComponent, ProjectFormComponent, DeleteComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    IconsProviderModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProjectModule {}
