# Daily_Uni2021

#### 介绍
日报

[项目参考地址](http://www.qdaily.com/)

#### 框架

##### Uni-App 框架

uni-app  是一个使用 vue.js 开发小程序、H5、App的统一前端框架

#### 技术栈

Vue、ES6、Sass、云开发、云数据库、云函数、父子组件之间通讯、组件化开发、swiper、

#### 开发工具

HBuilderX IDE

#### 使用

##### 创建项目
	2021.10.11
	1. 创建nui-app
	2. 运行 内置浏览器 谷歌浏览器 微信开发者工具
	3. 初始化项目 pages 配置需要的修改的 页面背景 以及title
	4. 在HBuilderX 安装 scss/sass语言 (根据报错链接进行安装即可，或者直接到官网安装)

##### navigatonBar 在H5不显示，小程序显示
[uni-app文档说明](https://uniapp.dcloud.io/collocation/pages?id=h5)

```
"path": "pages/index/index",
"style": {
    "navigationBarTitleText": "首页",
    // 设备名称
    "h5":{
        "titleNView":false // H5 不显示
    }
}
```

##### 将静态资源存放在 static

##### 在uni-app中，index.vue 更新入口文件

#### 云开发
	1. 在根文件夹，右键 创建uniCloud云开发环境 ( 阿里云，腾讯云[只允许建一次] ）
	2.  [阿里云·未关联云服务空间]  运行云服务空间初始化

##### 将导入数据云数据库
	1. 创建完可以在 uniCloud关联
	2. 在云数据库创建表 集合，导数JSON 数据 [uniCloud](https://unicloud.dcloud.net.cn)

##### 云函数 

[cloudfunctions] 右键创建云函数 [云函数操作云数据库](https://uniapp.dcloud.io/uniCloud/cf-database)

	1. 创建完毕之后，本地运行云函数 -- 有报错一定要看报错
	2. 上传部署，完成之后即可运行

##### 客户端调用云函数

云函数 -  [客户端调用云函数](https://uniapp.dcloud.io/uniCloud/cf-functions?id=clientcallfunction)


	1. 更新云函数，直接拿到数据。 上传部署
	2. 完成list渲染，调试完毕
	3. <style lang="scss" scoped> 不影响其他布局
	4. 云函数重新定义
	5. 完成search page

##### 通讯

```
<!-- 子组件 -->
IsShowPage(par){
    uni.$emit('IsShowPage',par)
}

<!-- 父组件 -->
onReady(){
    let that = this;
    uni.$on("IsShowPage",(pre)=>{
        // 这里的this 是指 uni
        that.flag = pre;
    })
}, // 监听页面初次渲染完成
```

##### 本地调试
##### Page Image
- index page
![输入图片说明](https://images.gitee.com/uploads/images/2021/1028/163448_6321cd23_8337576.png "微信图片_20211028163421.png")
- search page
![输入图片说明](https://images.gitee.com/uploads/images/2021/1028/163525_1dfc947a_8337576.png "在这里输入图片标题")
