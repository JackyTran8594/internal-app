import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

// ng zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';


const NZ_MODULES = [
  NzIconModule,
]

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...NZ_MODULES
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent, FooterComponent, BreadcrumbComponent],
  exports: [...NZ_MODULES, CommonModule, LayoutComponent, SidebarComponent, HeaderComponent, FooterComponent, BreadcrumbComponent],
  providers: [
    // {
    //   provide: NZ_I18N, useValue: en_US
    // },
    // {
    //   provide: NZ_ICONS, useValue: icons
    // }
  ],

})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: NZ_I18N, useValue: en_US
        },
        {
          provide: NZ_ICONS, useValue: icons
        }
      ]
    }
  }

}
