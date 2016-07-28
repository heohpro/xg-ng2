# xg-ng2

Angular2管理后台-前端

##开发说明

###安装
git地址

```
git@github.com:hexiaoming/xg-ng2.git
```
安装依赖

```
npm install
```

###运行

启动应用服务

```
npm run build
```
使用`webpack-dev-server`启动服务。

```
npm run start
```
##构建工具

构建工具使用`webpack`，使用插件`html-webpack-plugin`、`extract-text-webpack-plugin`和`combine-css-webpack-plugin`。主要是从源文件`/src`下到目标文件`/dist`的编译。

###公共配置
webpack的配置文件集中在`config`目录下的`webpack.config.js`文件中，提供了三个入口文件：

```
entry: {
  'polyfills': './src/polyfills.ts',
  'vendor': './src/vendor.ts',
  'app': './src/main.ts'
},
```
将应用拆成三个包：

- polyfills:我们在大多数现代浏览器中运行 Angular 2 程序时需要的标准填充物。
- vendor:我们需要的提供商文件： Angular 2 、 Lodash 、bootstrap 等。
- app - 我们的应用代码。

###服务端Mock数据

关于Mock数据部分，提供了`xg-ng2-server`部分进行服务端的搭建，提供了一些基本的数据访问的功能。

将`xg-ng2-server`放在与`xg-ng2`同目录，即可访问`xg-ng2`的项目内容。

##目录说明

- `/dist`: 发布目录，由工具生成，不需手动修改和关注。由 webpack 发布产生。
- `/config`: 配置文件目录。存放着如webpack等的配置文件。
- `/doc`: 文档目录。存放着项目迁移文档。
- `/src`: 源码目录，开发时关注的目录，统一进入到该目录下开发。
	- `/common`: 静态资源目录，内部按文件类型分位css，js，img三目录，可以自行增加。
	- `/lib`: 存放第三方库的文件。
	- `/app`: 下存放项目开发文件。
		- `/Directive`: 存放公共指令文件夹，每个指令一个以一个独立的文件夹的形式存在。直接在使用指令的组件中添加依赖。
		- `/Filter`和`/Service`与`/Directive`类似。
		- `/Router`用于存放按模块划分的路由。路由不需要以独立的文件夹存放。
		- `/Module`存放真正的业务文件，每个页面一个独立的文件夹。可按模块组织文件夹。。
		- `/Public`用于存放一些公共组件，例如`header`、`navbar`等。
		