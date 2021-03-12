import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';
import tslint from 'rollup-plugin-tslint';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const isEnvProduciton = process.env.NODE_ENV === 'production';
const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };
const pkg = require('./package.json');
// const processSass = function(context, payload) {
//   return new Promise(( resolve, reject ) => {
//     sass.render({
//         file: context
//     }, function(err, result) {
//         console.log(result);
//         if( !err ) {
//             resolve(result);
//         } else {
//             console.log(err);
//             reject(err)
//         }
//     });
//   })
// };

export default {
  input: './lib/index.ts', // 入口文件
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      sourcemap: isEnvProduciton ? false : true,
      globals: {
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: isEnvProduciton ? false : true,
      globals: {
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      sourcemap: isEnvProduciton ? false : true,
      globals: {
        // antd: 'antd',
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
  ],
  plugins: [
    postcss({
      // css module
      modules: true,
      minimize: isEnvProduciton,
      sourceMap: !isEnvProduciton,
      extensions: ['.less', 'scss', '.css'],
      // use: [['less', { javascriptEnabled: true }]],
    }),
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override
    }),
    tslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['lib'],
      exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
    }),

    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
    }),
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs({ include: /node_modules/ }),
    resolve(),
    isEnvProduciton && terser(), // 压缩js
  ],
  // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  external: ['react', 'react-dom']
};
