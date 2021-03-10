import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const isProd = process.env.NODE_ENV === 'production';

const pkg = require('./package.json');

const dependencies = Object.keys(pkg.peerDependencies);

export default {
  input: './components/index.ts', // 入口文件
  output: [
    {
      format: 'umd',
      name: pkg.name,
      sourcemap: isProd ? false : true,
      dir: 'lib',
      globals: {
        antd: 'antd',
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: isProd ? false : true,
      dir: 'lib',
      globals: {
        antd: 'antd',
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      sourcemap: isProd ? false : true,
      dir: 'lib',
      globals: {
        antd: 'antd',
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
  ],
  plugins: [
		resolve(),  // 这样 Rollup 能找到 `ms`
    typescript({ include: ['components/**'], lib: ['es5', 'es6', 'dom'], target: 'es5' }),
    eslint(),
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    postcss({
      // Minimize CSS, boolean or options for cssnano.
      minimize: isProd,
      // Enable sourceMap.
      sourceMap: !isProd,
      // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
      extensions: ['.less', '.css'],
      use: [['less', { javascriptEnabled: true }]],
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
    }),
    isProd && terser(), // 压缩js
  ],
  // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  external: dependencies,
};





export default [
	{
		input: 'src/main.js',
		output: {
			name: 'timeout',
			file: '/lib/tool.js',
			format: 'umd'
		},
		plugins: []
	}
];