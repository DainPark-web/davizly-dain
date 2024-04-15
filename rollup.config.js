// rollup.config.mjs
import terser from '@rollup/plugin-terser';

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'es'
		},
		{
			file: 'dist/index.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: []
};