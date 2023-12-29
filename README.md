配置了前端代码规范化的一个 demo 工程，主要包含以下配置：
- [`eslint`](https://eslint.bootcss.com/)：对代码进行风格和规范进行检查，对不符合规范的代码给出提示，同时可以进行一定程度的自动修复
- [`prettier`](https://prettier.io/)：自动格式化代码工具，根据`prettier`规范对代码进行修复，拥有比`eslint`更加强大的代码规范性修复能力
- [`husky`](https://typicode.github.io/husky/#/)：Git hooks工具，通过配置一系列钩子，可以在`git`操作的不同阶段执行相应的命令
- [`lint-staged`](https://github.com/okonet/lint-staged)：在提交代码前进行lint检查时，可以让lint只检查`git`暂存区（`staged`）的文件，而不会检查所有文件
- [`commitzen`](https://github.com/commitizen/cz-cli)：可以实现规范的提交说明的`git-cz`工具，提供选择的提交信息类别，快速生成提交说明，如果需要在项目中使用`commitizen`生成符合某个规范的提交说明，则需要使用对应的适配器
- [`commit-lint`](https://github.com/conventional-changelog/commitlint)：校验提交说明是否符合规范。`commitzen`只是一个实现规范提交说明的工具，但可能存在不使用这个工具直接用`git`提交的情况，那么就需要对每次提交说明进行检查是否符合规范。

详细内容可见此处：[前端代码规范化配置最佳实践](https://juejin.cn/post/7314365567376162853)。
