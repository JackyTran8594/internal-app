import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AuthenticationModule } from 'libs/authentication/src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '@internal-app/theme';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthenticationModule,
    IconsProviderModule.forRoot()

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
