import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  appIndex: 'public/index.html',
  plugins: [esbuildPlugin({ ts: true })]
};
