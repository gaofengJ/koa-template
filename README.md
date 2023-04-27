## 开发环境

node v16.2.0

npm 8.5.2

## 依赖说明

### dependencies

* axios
网络请求

* koa
框架

* routing-controllers
类控制器

* reflect-metadata
routing-controllers前置依赖，装饰器相关

* @koa/cors
cors相关

* koa-bodyparser
routing-controllers前置依赖

* @koa/multer
routing-controllers前置依赖，用于处理multipart/form-data 类型的表单数据，它主要用于上传文件

* @koa/router
路由支持

* class-transformer
将普通的javascript对象转换成类对象

* class-validator
参数校验

* node-schedule
定时任务

### devDependencies

* @types/koa
koa类型文件

* @types/koa-bodyparser
koa-bodyparser类型文件

* @types/node
node类型文件

* @types/node-schedule
node-schedule类型文件

* @typescript-eslint/eslint-plugin
ts相关类型文件

* @typescript-eslint/parser
ts相关类型文件

* cross-env
设置环境变量

* eslint
js规范

* eslint-config-airbnb-base
airbnb规范

* eslint-config-prettier
解决eslint和prettier冲突

* eslint-plugin-prettier
解决eslint和prettier冲突

* eslint-import-resolver-alias
别名/自定义路径

* eslint-plugin-import
规范JavaScript代码中的import和export语句

* husky
操作 git 钩子的工具

* lint-staged
本地暂存代码检查工具

* chalk
一个可以修改终端输出字符样式的 npm 包。chalk5 是 ESM，commonjs 中需要使用 chalk4.x。

* nodemon
本地监控/热更新

* ts-node
直接运行ts

* tsconfig-paths
解决paths 路径映射的，它的作用是在代码运行时能帮助node require 时能找到那些使用了路径映射的模块

* typescript
ts

* @commitlint/config-conventional
一个提交规范配置，标识采用什么规范来执行消息校验, 这个默认是Angular的提交规范。

* commitizen
git提交辅助校验工具

* cz-conventional-changelog
commitizen适配器

* cz-customizable
可自定义的Commitizen插件
