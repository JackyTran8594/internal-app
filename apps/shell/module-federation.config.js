module.exports = {
  name: 'shell',
  remotes: [
    ['dashboard', 'http://localhost:4201'],
   ['task-management', 'http://localhost:4202']],
  // remotes: [],
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
};
