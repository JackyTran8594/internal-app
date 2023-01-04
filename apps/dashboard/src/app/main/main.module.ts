import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, NzModalModule],
  providers: [provideSvgIcons([])],
})
export class MainModule {}
