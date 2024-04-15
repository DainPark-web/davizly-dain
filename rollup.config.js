// rollup.config.mjs
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/index.js',
	output: [
		{
			file: './dist/bundle.js',
			format: 'es'
		},
		{
			file: './dist/bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: []
};