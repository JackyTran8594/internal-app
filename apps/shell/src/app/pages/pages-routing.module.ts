import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { loadRemoteModule } from '@nrwl/angular/mf';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'task-management',
        loadChildren: () =>
          import('task-management/Module').then((m) => m.RemoteEntryModule),
        // loadRemoteModule('task-management','./Module').then((m) => m.RemoteEntryModule)

      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('dashboard/Module').then((m) => m.RemoteEntryModule),
          // loadRemoteModule('dashboard','./Module').then((m) => m.RemoteEntryModule)

      }
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
