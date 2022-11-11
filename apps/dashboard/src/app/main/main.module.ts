import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { IconsProviderModule } from '@internal-app/theme';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, IconsProviderModule],
})
export class MainModule {}
