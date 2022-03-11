## 安装使用
- 运行

```bash
pnpm i
pnpm run dev
```

- 打包

```bash
pnpm run build
```
## 更新日志

[CHANGELOG](./CHANGELOG.zh_CN.md)

## 项目地址

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

### 注：

1.该版本是在thin的git改造的，集成了vben的完整版的main分支的package.json，但是未替换moment包，main用的是dayjs

2.删除了mock，登陆默认成功，需要你自己改。premission未删除，可以针对自己的项目删除。删除permission后，本地开发的首次加载速度会很快（斜眼笑）。

3.删除所有分号,修改了axios的状态码拦截和登陆验证，用户信息等vben作者都放在了store/user里，按照自己项目修改
