import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   // component: RemoteEntryComponent,
  //   redirectTo: 'main',
  // },
  {
    path: '',
    loadChildren: () => import('../main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(remoteRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
