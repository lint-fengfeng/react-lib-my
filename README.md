## 一、介绍
可以自动化（storybook）生成可配置的前端react组件，也支持React Hooks模板、和类组件动态生成。
自动化参考：storybook： [传送门](https://storybook.js.org/docs/react/get-started/introduction)
## 二、新增组件

1. 进入组件目录下, 执行脚本，完成简单的问询，在lib目录下可以生成对应组件和样式文件，并自动引入；并且在入口文件已经自动引入该新增组件。
```bash
npm add-custom
```

2. 要注意：组件开发需要使遵循typescript规范。
## 三、调试

1. 在example中，有一个小型的react项目demo，新增好组件后，命令行执行：
```bash
npm run dev
```

2. 之后你的组件就打包成一个dist包，可以在example目录下，将react项目启动，然后引入我们新打好的dist包，然后可以测试我们刚刚 开发好的组件
## 四、发布 / 取消发布 / 下载
在测试组件无误后，需要将组件库发布到我们的私有仓库，这里要注意我们的私仓，发布是一个地址，下载又是另一个地址，首先看发布：

## 五、使用rollup + tenser + ts、tslint
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


### 六、集成iconfont

- iconfont： [https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a](https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a)
- 测试仓库地址： [https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2217708&keyword=&project_type=&page=](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2217708&keyword=&project_type=&page=)
