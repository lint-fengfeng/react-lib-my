import babel from '@rollup/plugin-babel';
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';
import tslint from 'rollup-plugin-tslint';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
// import cssnext from 'postcss-cssnext';
import copy from "rollup-plugin-copy-assets";

const isEnvProduciton = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)
const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };
const pkg = require('./package.json');
const path = require("path")

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
  //   {
  //   file: pkg.browser,
  //   format: 'umd',
  //   name: pkg.name,
  //   sourcemap: !isEnvProduciton,
  //   globals: {
  //     react: 'react',
  //     'react-dom': 'react-dom',
  //   }
  // }, {
  //   file: pkg.main,
  //   format: 'cjs',
  //   sourcemap: !isEnvProduciton,
  //   globals: {
  //     react: 'react',
  //     'react-dom': 'react-dom',
  //   }
  // },
  {
    file: pkg.module,
    format: 'es',
    sourcemap: !isEnvProduciton,
    globals: {
      // antd: 'antd',
      react: 'react',
      'react-dom': 'react-dom',
    }
  }],
  plugins: [
    nodeResolve(),
    postcss({
      // css module
      modules: false,
      minimize: isEnvProduciton,
      sourceMap: !isEnvProduciton,
      extensions: ['.css', '.scss'],
      plugins: [
        simplevars(),
        nested()
        // cssnext({ warnForDuplicates: false })
      ],
      extract: 'static/index.css'

      // use: [['less', { javascriptEnabled: true }]],
    }),
    copy({
      assets: [
        'static'
      ]
    }),
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override
    }),
    tslint({
      throwOnError: true,
      throwOnWarning: true
    }),

    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
    }),
    // font({
    //     "include": [
    //       "iconfont/**" //这里根据自己使用的库修改
    //     ],
    //     "svg":"./iconfont/iconfont.svg",
    //     "outDir":"./dist/webfonts"
    // }),
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs({ include: /node_modules/ }),
    isEnvProduciton && terser(), // 压缩js
  ],
  // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  external: ['react', 'react-dom']
};
