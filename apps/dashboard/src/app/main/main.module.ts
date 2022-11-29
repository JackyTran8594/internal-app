import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { IconsProviderModule } from '@internal-app/theme';
import { NzTableModule } from 'ng-zorro-antd/table';
import { provideSvgIcons } from '@ngneat/svg-icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ],
  providers: [provideSvgIcons([])],
})
export class MainModule {}
