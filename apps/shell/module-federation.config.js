const { shareAll } = require('@nrwl/angular/module-federation');

module.exports = {
  name: 'shell',
  remotes: ['dashboard', 'task-management'],
  // shared: {
  //   ...shareAll({
  //     singleton:true,
  //     eager: true,
  //     restrictVersion: true,
  //     requiredVersion: 'auto'
  //   })
  // }
};
