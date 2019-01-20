## 一个简易的招聘系统
## 项目结构
```
── server
│   ├── model.js
│   ├── server.js
│   └── user.js
└── src
    ├── Route
    │   └── index.js
    ├── component
    │   ├── authroute
    │   │   └── authroute.js
    │   ├── avatar-selector
    │   │   └── avatar-selector.js
    │   ├── boss
    │   │   └── boss.js
    │   ├── chat
    │   │   └── chat.js
    │   ├── company
    │   │   └── company.js
    │   ├── dashboard
    │   │   └── dashboard.js
    │   ├── genius
    │   │   └── genius.js
    │   ├── img
    │   │   ├── boy.png
    │   │   ├── bull.png
    │   │   ├── chick.png
    │   │   ├── crab.png
    │   │   ├── girl.png
    │   │   ├── hedgehog.png
    │   │   ├── hippopotamus.png
    │   │   ├── koala.png
    │   │   ├── lemur.png
    │   │   ├── man.png
    │   │   ├── pig.png
    │   │   ├── tiger.png
    │   │   ├── whale.png
    │   │   ├── woman.png
    │   │   └── zebra.png
    │   ├── imooc.form
    │   │   └── imooc.form.js
    │   ├── logo
    │   │   ├── 21.jpg
    │   │   ├── logo.css
    │   │   ├── logo.jpg
    │   │   └── logo.js
    │   ├── msg
    │   │   └── msg.js
    │   ├── navlink
    │   │   ├── img
    │   │   │   ├── boss-active.png
    │   │   │   ├── boss.png
    │   │   │   ├── company-active.png
    │   │   │   ├── company.png
    │   │   │   ├── job-active.png
    │   │   │   ├── job.png
    │   │   │   ├── msg-active.png
    │   │   │   ├── msg.png
    │   │   │   ├── user-active.png
    │   │   │   └── user.png
    │   │   └── navlink.js
    │   ├── user
    │   │   └── user.js
    │   └── usercard
    │       └── usercard.js
    ├── config.js
    ├── container
    │   ├── bossinfo
    │   │   └── bossinfo.js
    │   ├── geniusinfo
    │   │   └── geniusinfo.js
    │   ├── login
    │   │   └── login.js
    │   └── register
    │       └── register.js
    ├── index.css
    ├── index.js
    ├── reducer.js
    ├── redux
    │   ├── chat.redux.js
    │   ├── chatuser.redux.js
    │   └── user.redux.js
    └── util.js
```

## 项目描述
  * 1.此项目为一个前后台分离的招聘的SPA, 包括前端应用和后端应用
  * 2.包括用户注册/登陆, 求职者/boss列表, 实时聊天等模块
  * 3.前端: 使用React全家桶+ES6+Webpack等技术
  * 4.后端: 使用Node + express + mongodb + socketIO等技术
  * 5.采用模块化、组件化、工程化的模式开发

## 演示
#### 注册
![register](https://raw.githubusercontent.com/xinglee23/chance-app/master/src/mp4/register.gif)
#### 登陆
![login](https://raw.githubusercontent.com/xinglee23/chance-app/master/src/mp4/login.gif)
## 技术栈
  * React
  * React-Router
  * React-Redux
  * antd-mobile
  * Babel
  * Webpack
  * Node.js
  * mongodb
  * express
  * socket-io
  
