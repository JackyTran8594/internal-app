import { ModuleWithProviders, NgModule } from '@angular/core';

// ng zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import vi from '@angular/common/locales/vi';


import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';



const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzIconModule,
  ],
  exports: [
    NzIconModule
  ],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
  ],

})
export class IconsProviderModule {
  static forRoot(): ModuleWithProviders<IconsProviderModule> {
    return {
      ngModule: IconsProviderModule,
      providers: [
        { provide: NZ_ICONS, useValue: icons },
      ]
    }
  }

}
