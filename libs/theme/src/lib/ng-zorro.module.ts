import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

const NZ_MODULES = [NzDropDownModule, NzButtonModule, NzCardModule];

@NgModule({
  imports: [CommonModule, ...NZ_MODULES],
  declarations: [],
  exports: [NZ_MODULES],
  providers: [],
})
export class NgZorroModule {
  static forRoot(): ModuleWithProviders<NgZorroModule> {
    return {
      ngModule: NgZorroModule,
      providers: [],
    };
  }
}
