import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgZorroModule } from '@internal-app/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule { }
