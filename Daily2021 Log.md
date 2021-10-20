### 日报
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
	7. index.vue 入口文件 不是app.vue
	8. 路径 -- '~@' 直接到根目录
	9. iconfont.css 路径修改 - src 前面 add '~@/iconfonts/'  -- 保证兼容 [uni-app](https://uniapp.dcloud.io/frame?id=css%e5%bc%95%e5%85%a5%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90)
	10. 引入 iconfont.css  注意标签是添加两个类名(或者直接cv)
		- <text class="iconfont icon-search"></text>
	11. 拆分组件 uni-app组件的使用
	12. 轮播图  [swiper](https://uniapp.dcloud.io/component/swiper?id=swiper)
		- 需要修改swiper 高度
#### 2021.10.19
#### 云开发
	1. 在根文件夹，右键 创建uniCloud云开发环境 ( 阿里云，腾讯云[只允许建一次] ）
	2.  [阿里云·未关联云服务空间]  运行云服务空间初始化
#### 将导入数据云数据库
	1. 创建完可以在 uniCloud关联
	2. 在云数据库创建表 集合，导数JSON 数据 [uniCloud](https://unicloud.dcloud.net.cn)
#### 云函数 
	1. [cloudfunctions] 右键创建云函数 [云函数操作云数据库](https://uniapp.dcloud.io/uniCloud/cf-database)
	2. 创建完毕之后，本地运行云函数 -- 有报错一定要看报错
	3. 上传部署，完成之后即可运行
#### 客户端调用云函数
	1. 云函数 -  [客户端调用云函数](https://uniapp.dcloud.io/uniCloud/cf-functions?id=clientcallfunction)
	2. 更新云函数，直接拿到数据。 上传部署
	3. 完成list渲染，调试完毕
	4. <style lang="scss" scoped> 不影响其他布局
	5. 云函数重新定义
	6. 完成search page
#### 通讯 事件
	1.  @tap="" -- 触摸事件
	2.  
	{
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
	}