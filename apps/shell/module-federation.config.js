const { shareAll } = require('@nrwl/angular/module-federation');

module.exports = {
  name: 'shell',
  remotes: ['dashboard','task-management'],

};
