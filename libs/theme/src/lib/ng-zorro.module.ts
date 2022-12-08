import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

const NZ_MODULES = [
  NzButtonModule,
  NzCardModule,
  NzDropDownModule,
  NzTableModule,
  NzTabsModule,
  NzDatePickerModule,
  NzInputModule,
  NzModalModule,
  NzSelectModule,
];

@NgModule({
  imports: [CommonModule, ...NZ_MODULES],
  declarations: [],
  exports: [NZ_MODULES],
  providers: [],
})
export class NgZorroModule {
  // static forRoot(): ModuleWithProviders<NgZorroModule> {
  //   return {
  //     ngModule: NgZorroModule,
  //     providers: [],
  //   };
  // }
}
