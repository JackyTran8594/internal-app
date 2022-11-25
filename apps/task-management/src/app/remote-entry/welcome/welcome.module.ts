import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroModule } from '@internal-app/theme';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, WelcomeRoutingModule, NgZorroModule],
})
export class WelcomeModule {}
