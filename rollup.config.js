import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace';
import versionInjector from 'rollup-plugin-version-injector';

const plugins = [
  resolve(),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
  }),
  versionInjector({
    injectInComments: false,
    logLevel: 'warn',
  }),
  replace({
    'typeof window': JSON.stringify('object'), // Replace 'typeof window' with a string
    preventAssignment: true,
  }), 
]

export default {
  input: './src/index.ts',
  output: {
    globals: {
    },
    file: './dist/home-assistant-sun-card2.js',
    format: 'iife',
    name: 'SunCard'
  },
  context: 'this',
  plugins: [...plugins],
}
