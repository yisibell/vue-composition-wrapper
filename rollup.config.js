import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  external: ['vue', '@vue/composition-api'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(), // so Rollup can convert TypeScript to JavaScript
    terser(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
}
