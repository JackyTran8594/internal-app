import { ModuleWithProviders, NgModule } from '@angular/core';

// ng zorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  EnvironmentOutline,
  EnterOutline,
  InboxOutline,
  PhoneOutline,
  MessageOutline,
  MoneyCollectOutline,
  SolutionOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  UserOutline,
  EnvironmentOutline,
  EnterOutline,
  InboxOutline,
  PhoneOutline,
  MessageOutline,
  MoneyCollectOutline,
  SolutionOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    // { provide: NZ_ICONS, useValue: icons },
  ],
})
export class IconsProviderModule {
  static forRoot(): ModuleWithProviders<IconsProviderModule> {
    return {
      ngModule: IconsProviderModule,
      providers: [{ provide: NZ_ICONS, useValue: icons }],
    };
  }
}
