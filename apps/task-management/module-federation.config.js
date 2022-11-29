
module.exports = {
  name: 'task-management',
  exposes: {
    './Module': 'apps/task-management/src/app/remote-entry/entry.module.ts',
  },
  additionalShared: [
    'ng-zorro-antd',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    'bootstrap',
    'highcharts',
    'highcharts-angular'
  ],
  // output: {
  //   uniqueName: "task-management",
  //   publicPath: "auto",
  //   scriptType: "text/javascript"
  // }
  
};
