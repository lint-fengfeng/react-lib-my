##  发布
```bash
  npm publish
```

## 安装
```bash
npm i
```

## 自动化生成组件

storybook： [传送门](https://storybook.js.org/docs/react/get-started/introduction)
## 定制化生成组件

  可以通过脚本, 新增组件。
  ```
    npm run add-lib
  ```


  prop插件: [传送门](https://github.com/plopjs/plop)

## 关于esbuild
[传送门](https://esbuild.github.io/)
目前个人感受最深的就是，不够灵活，官方文档也提到，不支持ast操作. 另外的就是生态非常一般，简直太一般了，完全比不上webpack。

## 写在最后
```
  `应用开发使用webpack，库开发使用rollup, 还有esbuild`
  rollup使用起来更加简洁，而且能打出能小体积的文件。但当我s们做前端应用时，性能分析往往要求更小的库，所以rollup更符合开发组件库的要求。
  优：
  输出结果更扁平
  自动移除未引用代码
  打包结果依然完全可读
  缺：
  加载非ESM第三方模块比较复杂
  模块最终都被打包到一个函数中，无法实现HMR（热替换）
  浏览器环境中，代码拆分功能依赖AMD库

  开发更适用于css,js,图片，html的web应用
  开发框架类库 rollup ,这里由于是组件库，优点很有用，缺点可以忽略不计，所以用了rollup
```