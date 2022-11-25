import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { NgZorroModule, ThemeModule } from '@internal-app/theme';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    NgZorroModule.forRoot(),
    RouterModule.forChild(remoteRoutes),
    ThemeModule.forRoot(),
  ],
  providers: [],
})
export class RemoteEntryModule {}
