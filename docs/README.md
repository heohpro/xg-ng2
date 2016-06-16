##配置文件

项目目录下配置文件如下：

- package.json：项目中所有的依赖，并定义了相关脚本。[npm配置](http://angular.live/docs/ts/latest/guide/npm-packages.html)
- tsconfig.json：TypeScript的编译器配置文件。[TypeScript配置](http://angular.live/docs/ts/latest/guide/typescript-configuration.html#!#tsconfig)
- typings.json：指定TypeScript的定义文件，为其他依赖的框架增加typescript的适配。[TypeScript定义文件](http://angular.live/docs/ts/latest/guide/typescript-configuration.html#!#typings)
- webpack.config.js：SystemJS的配置文件。模块打包器，目录暂时SystemJS作为打包工具，后期会考虑换成webpack。
- karma.conf.js：利用karma来部署测试相关的部分（暂时未启用）

