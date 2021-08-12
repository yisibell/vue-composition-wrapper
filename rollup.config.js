import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'VueCompositionWrapper',
      file: pkg.main,
      format: 'umd',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(), // so Rollup can convert TypeScript to JavaScript
    terser(),
  ],
}
