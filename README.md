# Server-Tools

## 介绍

Server Tools 能辅助你快速搭建服务器,
使用node.js制作

橙蓝 ©2023~2023,

## 使用

node Server-Tools.js 或 node Server-Tools.js help

查看各项命令

node Server-Tools.js <命令> <参数>

执行命令

### 部分可用命令

\[帮助\] help

\[搭建静态网站\] page <端口> <重定向表> <打印日志 (ON/OFF)> <输出日志路径 (可留空)>

#### 重定向表
重定向表用于重定向链接所指的文件

格式为 Link1>Path1'Link2>Path2......
(链接>重定向地址,用 ' 分隔)

比如 ./o.html>i.html
表示访问 location/o.html 并不会访问 o.html ，而是返回 o.html 的内容

#### 特殊的重定向
.>Path 重定向主页
404>Path 重定向404错误页
