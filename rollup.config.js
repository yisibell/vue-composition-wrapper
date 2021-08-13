import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  external: ['vue', '@vue/compositiom-api'],
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
