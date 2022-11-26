import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'nx-welcome',
        component: NxWelcomeComponent,
      },
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule)
      }

    ]
  },
];

