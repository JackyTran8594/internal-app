
module.exports = {
  name: 'dashboard',
  exposes: {
    './Module': 'apps/dashboard/src/app/remote-entry/entry.module.ts',
  },
  output: {
    uniqueName: "dashboard",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
 
};
