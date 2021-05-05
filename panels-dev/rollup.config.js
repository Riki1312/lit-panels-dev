import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import html from '@web/rollup-plugin-html';

export default {
  input: 'public/*.html',
  output: { dir: 'dist' },
  plugins: [nodeResolve(), typescript(), html()]
};
