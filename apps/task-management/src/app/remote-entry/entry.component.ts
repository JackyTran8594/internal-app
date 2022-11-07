import { Component } from '@angular/core';

@Component({
  selector: 'internal-app-task-management-entry',
  template: `
  <!-- <internal-app-nx-welcome></internal-app-nx-welcome> -->
  <internal-app-layout>
      <internal-app-sidebar></internal-app-sidebar>
      <internal-app-header></internal-app-header>
      <internal-app-breadcrumb></internal-app-breadcrumb>
      <router-outlet></router-outlet>
      <internal-app-footer></internal-app-footer>
  </internal-app-layout>
  `,
})
export class RemoteEntryComponent { }
