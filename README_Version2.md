# vedeoweb

个人视频管理网站。  
- 需输入三个验证码才能访问主页  
- 支持 Cloudflare R2 上传和访问视频  
- 前端 React + TypeScript，静态部署（可用 GitHub Pages）

## 本地启动

1. 安装依赖：`npm install`
2. 创建 `.env` 文件，填入你自己的 R2 相关参数
3. 启动开发服务器：`npm start`

## 部署到 GitHub Pages

1. 修改 `package.json` 的 `homepage` 字段为你的 Pages 地址
2. 安装 gh-pages：`npm install -D gh-pages`
3. 部署：`npm run deploy`
4. 绑定自定义域名详见 [GitHub Pages 官方文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 注意事项

- R2 存储桶需配置 CORS，允许你的前端域名访问
- 推荐将 R2 桶设置为公开可读，否则视频列表访问会报错
- AccessKey/SecretKey 只适合私人用途，如需正式安全方案请用后端中转