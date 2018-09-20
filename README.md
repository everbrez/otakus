# Otakus
> 此项目是为otakus而创建的一款番剧、漫画、小说管理系统。


[![Build Status](https://travis-ci.org/everbrez/otakus.svg?branch=develop)](https://travis-ci.org/everbrez/otakus)
[![Coverage Status](https://coveralls.io/repos/github/everbrez/otakus/badge.svg?branch=develop)](https://coveralls.io/github/everbrez/otakus?branch=develop)

# 项目安装
1. mac用户可跳过此步骤，windows用户在`git config`中设置
```shell
git config --global core.autocrlf input
```
此命令使git上传代码时默认将CRLF转换为LF，为了维护代码统一，windows系统的用户请先设置编辑器的默认换行符为`LF`即`\n`再进行开发。

2. 将项目下载到本地
```shell
git clone git@github.com:everbrez/otakus.git
```

3. 安装依赖包
```shell
npm i
```
或者使用淘宝镜像
```shell
cnpm i
```

4. 开启开发者服务器dev-server
```shell
npm start
```

5. 执行测试
```shell
npm test
```

6. 代码风格检测
```shell
npm run lint
```
其中报告会生成在`/test/lint.html`中

7. 打包
```shell
npm run build
```
此处如果代码风格检测不通过则会fail，无法成功打包。

# Project map
![map](https://github.com/everbrez/otakus/blob/develop/docs/images/Otaku-life.png)