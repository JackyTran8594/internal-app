import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';

const NZ_MODULES = [
  NzDropDownModule,
  NzButtonModule,
]


@NgModule({
  imports: [
    CommonModule,
    ...NZ_MODULES
  ],
  declarations: [],
  exports: [NZ_MODULES],
  providers: [
  ],

})
export class NgZorroModule {
  static forRoot(): ModuleWithProviders<NgZorroModule> {
    return {
      ngModule: NgZorroModule,
      providers: [

      ]
    }
  }

}
