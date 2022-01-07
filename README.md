# next-app-template

## 环境配置

| 环境 | 文件名           |
| ---- | ---------------- |
| 测试 | .env.development |
| 生产 | .env.production  |

1. 环境配置中以`NEXT_PUBLIC_`开头的环境将在编译阶段硬编码到 js 代码中，所以不要将重要的密码信息以`NEXT_PUBLIC_`开头。
2. 其他的 env 变量不会被硬编码到 js 中，在 js 页面中也无法访问，只能在 api 或数据获取中使用。

> 官方文档：https://nextjs.org/docs/basic-features/environment-variables
