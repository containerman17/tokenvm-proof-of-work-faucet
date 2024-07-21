import { wasm } from '@rollup/plugin-wasm';

export default {
    input: 'main.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [wasm({ sync: ['./main.wasm'] })]
};