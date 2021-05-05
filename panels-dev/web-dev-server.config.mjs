import { esbuildPlugin } from '@web/dev-server-esbuild';

// https://modern-web.dev/docs/dev-server/cli-and-configuration/

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  appIndex: 'public/index.html',
  plugins: [esbuildPlugin({ ts: true })]
};
