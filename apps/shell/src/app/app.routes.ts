import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

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
];
