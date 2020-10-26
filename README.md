## @muniz/cli

Muniz 脚手架, 插件模版

### 项目框架

#### Eslint

- 使用 Eslint 进行代码规范校验
- 继承 于 airbnb 规范

#### Prettierrc

- 使用 Prettierrc 进行代码本地、提交时的格式校验
- 与 Eslint 冲突的解决

#### Babel

- 使用 Babel 解析, 使其 ES6、新特性 在 Node - cli 端生效.

#### Commitlint

- 进行 Github 代码提交 Commit 校验
- husky 、 lint-staged

#### ink

- React 开发命令行库

### 开发

#### 开发环境

- 初始化开发环境

> 作用： 在新的环境中，初始化开发环境。

```js
// 以下命令均在工程根目录执行

yarn install /* 安装依赖库 */
yarn link /* 执行link 功能, 挂载到 bin 执行环境中 */
```

- 运行命令

> 作用：通过执行以下命令，内部调用 nodemon 监听文件变化 实时转换代码。

```js
yarn dev /* 在工程根目录运行 */
```

### 测试

### 提交

### 发布

### 文档
