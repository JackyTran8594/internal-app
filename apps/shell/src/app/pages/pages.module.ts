import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgZorroModule } from '@internal-app/theme';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, NgZorroModule],
})
export class PagesModule {}
