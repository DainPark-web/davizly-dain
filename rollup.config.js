// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
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
	plugins: [
		json(), 
		nodeResolve(),
		commonjs({
		include : 'node_modules/**'
	})
]
};