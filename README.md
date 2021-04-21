## 介绍
可以自动化（storybook）生成可配置的前端react组件，也支持React Hooks模板、和类组件动态生成。
自动化参考：storybook： [传送门](https://storybook.js.org/docs/react/get-started/introduction)

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


## 安装

1. 在packag.json中添加scripts
```bash
"scripts": {
	"setup"; "npm i --registry http://172.26.130.15:9081/repository/npmjs.org/"
}
```
然后在项目目录下执行：
```bash
npm i
```

2. 直接项目目录下第二种方法
```bash
npm i
npm i xdf-mini-lib --registry http://172.26.130.15:9081/repository/npmjs.org/
```
## 三、用法
## 四、使用rollup + tenser + ts、tslint
### 1. 对比esbuild、webpack、rollup+ tenser：
```
`
1. esbuild:
优点： 适用于打包js库；打包速度十分快，可谓迅猛
缺点： 社区资源比较匮乏，想集成其他插件如iconfont和类库需要探索，或许有未知bug，配置起来不太灵活，暂时
2. 应用开发使用webpack，, 还有esbuild`
 开发更适用于css,js,图片，字体，html的web应用
3. 库开发使用rollup
 优：输出结果更扁平、自动移除未引用代码、打包结果依然完全可读。rollup使用起来更加简洁，而且能打出能小体积的文件。
 缺：加载非ESM第三方模块比较复杂、模块最终都被打包到一个函数中，无法实现HMR（热替换）、浏览器环境中，代码拆分功能依赖AMD库
```
### 2. 关于样式的提取问题
roll的样式提取插件 无法做到提取样式中font-face引用的字体，于是只能把iconfont.css和组件的scss样式同时提取到css文件中，至于引入的字体只能通过copy插件，拷贝到包的对应目录下。这也就要求后续使用组件库的时候需要在对应项目的入口文件处，引入样式： import "xdf-mini-lib/static.css"

- 同样的道理, 和我们项目中swiper的引入方式相同，可类比：
```bash
import "swiper/dist/style.css"
```


### 五、集成iconfont

- iconfont： [https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a](https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a)
- 测试仓库地址： [https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2217708&keyword=&project_type=&page=](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2217708&keyword=&project_type=&page=)


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