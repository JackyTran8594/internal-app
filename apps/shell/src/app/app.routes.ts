import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { LoginComponent } from 'libs/authentication/src/lib/login/login.component';
import { AuthenticationComponent } from 'libs/authentication/src/lib/authentication.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'task-management',
        loadChildren: () =>
          import('task-management/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('dashboard/Module').then((m) => m.RemoteEntryModule),
      }
    ]
  },


  // {
  //   path: 'task-management',
  //   loadChildren: () =>
  //     import('task-management/Module').then((m) => m.RemoteEntryModule),
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('dashboard/Module').then((m) => m.RemoteEntryModule),
  // },
  // {
  //   path: '',
  //   // component: NxWelcomeComponent,
  //   component: AppComponent
  // },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
