import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'welcome',
        component: NxWelcomeComponent,
      },
      {
        path: 'test',
        loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule)
      }
      
    ]
  },
];
