import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { LoginComponent } from 'libs/authentication/src/lib/login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'task-management',
    loadChildren: () =>
      import('task-management/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
