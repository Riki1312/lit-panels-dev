import { nodeResolve } from '@rollup/plugin-node-resolve';
import html from '@web/rollup-plugin-html';

export default {
  input: 'public/*.html',
  output: { dir: 'dist' },
  plugins: [nodeResolve(), html()]
};
