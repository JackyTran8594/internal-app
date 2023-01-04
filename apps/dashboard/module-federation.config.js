
module.exports = {
  name: 'dashboard',
  exposes: {
    './Module': 'apps/dashboard/src/app/remote-entry/entry.module.ts',
  },
  additionalShared: [
    'ng-zorro-antd',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    'bootstrap',
    'highcharts',
    'highcharts-angular',
    '@ant-design/icons-angular'
  ],
  output: {
    uniqueName: "dashboard",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
};
