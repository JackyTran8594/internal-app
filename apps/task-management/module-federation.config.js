
module.exports = {
  name: 'task-management',
  exposes: {
    './Module': 'apps/task-management/src/app/remote-entry/entry.module.ts',
  },
  output: {
    uniqueName: "task-management",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
};
