import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'


const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
  }),

]

export default {
  input: './src/index.ts',
  output: {
    file: './dist/home-assistant-sun-card2.js',
    format: 'es'
  },
  plugins: [...plugins],
}
