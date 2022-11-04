import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { LoginComponent } from 'libs/authentication/src/lib/login/login.component';
import { AuthenticationComponent } from 'libs/authentication/src/lib/authentication.component';
import { AppComponent } from './app.component';
import { AuthenticationModule } from '@internal-app/authentication';

export const appRoutes: Route[] = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@internal-app/authentication').then((m) => m.AuthenticationModule),
  },
  // {
  //   path: '',
  //   component: AppComponent
  // },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
