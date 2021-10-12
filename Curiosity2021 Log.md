### 仿好奇心日报
	- [项目参考地址](http://www.qdaily.com/)
#### uni-app
	- 使用vue开发的前端应用框架，编写一套代码即可 在ios Android H5 以及小程序
#### 1. 创建项目
	2021.10.11
	1. 创建nui-app
	2. 运行 内置浏览器 谷歌浏览器 微信开发者工具
	3. 初始化项目 pages 配置需要的修改的 页面背景 以及title
	4. 在HBuilderX 安装 scss/sass语言 (根据报错链接进行安装即可，或者直接到官网安装)
	5. H5清楚导航栏 沉浸式状态栏 H5不显示 小程序显示 -- pages navigatonBar
		- [uni-app](https://uniapp.dcloud.io/collocation/pages?id=h5)
		
		"path": "pages/index/index",
		"style": {
			"navigationBarTitleText": "首页",
			// 设备名称
			"h5":{
				"titleNView":false // H5 不显示
			}
		}
		
	6. 存放静态资源到static icon直接放在根目录

#### 