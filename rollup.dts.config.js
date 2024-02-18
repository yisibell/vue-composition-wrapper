import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: './types/index.d.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
]
