## 一、前端开发痛点分析

作为前端，我们知道，很多时候公司的APP、小程序、H5-SPA的结构和样式都是一致的，但我们就必须要写好几套代码来开发同样的应用，这就增大了我们前端的工作量。因此，你需要一个框架，来帮助你适配目前市场上较为热门的所有平台，这个框架，就是：uni-app。

## 二、Uniapp简介

官网地址：https://uniapp.dcloud.io/

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

![](assets/01.png)

## 三、创建与运行项目

具体操作参考：https://uniapp.dcloud.io/quickstart

我们创建一个名为 `daily` 的小程序项目：

![image-20200814161900158](assets/02.png)

点击 `创建`，即可创建项目。

点击工具栏的 `运行 > 运行到浏览器/运行到小程序模拟器` 进行测试。

这里注意，第一次运行到小程序时，会有这个报错：

![image-20200814162235723](assets/03.png)

这里已经讲得很清楚了，你要去微信小程序开发工具，根据这个提示修改：

![image-20200814162341776](assets/04.png)

然后关闭微信小程序开发工具，重新在HBuilder中运行项目到小程序：

![image-20200814162712214](assets/05.png)

可以看到，我们已经同时在两个平台跑起了一套代码。

## 四、项目资源

### 1、项目参考地址

http://m.qdaily.com/mobile/homes.html   （移动端）

### 2、iconfont

```css
/* iconfont */
@font-face {
    font-family: 'iconfont';  /* project id 2008103 */
    src: url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.eot');
    src: url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.eot?#iefix') format('embedded-opentype'),
        url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.woff2') format('woff2'),
        url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.woff') format('woff'),
        url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.ttf') format('truetype'),
        url('http://at.alicdn.com/t/font_2008103_mfb0qwnlnqd.svg#iconfont') format('svg');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
}
```

调用：

<img src="assets/06.png" style="border: 1px solid" />

### 3、uniapp的云开发

一般uniapp我们比较少用云开发，当然这要看公司是否有需求。uniapp的云开发需要到 https://dev.dcloud.net.cn/ 这个网址进行实名认证（在网页的右上角）。具体流程：

> 项目中创建uniCloud云开发环境 >> 到官网实名认证 >> 项目中创建云服务空间 >> 跳到官网选择“腾讯云” >> 微信扫码完成腾讯云的实名认证 >> 人脸识别 >> 回到网页为服务空间命名(这里我命名为`unicloud-daily`) 

可以进入到这个界面，就证明你成功了：

<img src="assets/07.png" style="border: 1px solid" />

一般两分钟内就可以初始化完成，以上所有云开发初步操作，大概只要5分钟即可完成。

这里给个提示，unicloud开发时，需要在 `mainfest.json` 中配置：

```json
"mp-weixin" : {
    ...,
    "cloudfunctionRoot" : "/cloudfunctions/",
    ...
}
```

后续操作与小程序云开发大同小异，可自行摸索。

## 五、开发注意

### 1、uniCloud的支持情况

如果你的项目是跑在微信小程序或支付宝小程序，可以直接使用腾讯云或阿里云，如果是跑在H5页面，需要备案域名。官网说明：

![image-20200816073357886](assets/08.png)

### 2、图片等资源无法正常显示？

将这些静态资源放入项目根目录下的 `static` 中即可。

### 3、iconfont使用

uniapp在开发时，使用iconfont后，为了支持微信小程序端iphone打开能兼容，需要把字体图标下载下来。但是我们需要修改 `iconfont.css` ：

```scss
@font-face {font-family: "iconfont";
  src: url('~@/iconfonts/iconfont.eot?t=1598233615452'); /* IE9 */
  src: url('~@/iconfonts/iconfont.eot?t=1598233615452#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAScAAsAAAAACPQAAARPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqFBIQ5ATYCJAMUCwwABCAFhG0HVRvSB8geg207eRxWkXSS1lL/EXw/1vZ9uTtMGyTRSPfpJBFJhERjSNASlU6odA8dpnKzBapJXVJTR04MCWmKh1Q8VMzO3OF1Iva8oQj5Dy6nvxoa2DzLcllz0poYYBxQYHvzAinQAkqUG8ZuIg/yPIF2owLRVrMLmcBAAaYF4hbHuMAgYVQqaKGlaRSsLeIZVK30SL8DgCfv+/ELwsOApGZg7tp5lgCkfhh/vMygtJRdigDRcHYom8iYAxTirtB5ixEk5zC0W7/TsQho15KkD+P3lh99Pl7WarGlG1K3wz88iiwJogEoOwXSoqIcnAgLI5UlzyHz5aOXeNVlXnwtykrXtKOJNwBiGAD1mKeK477hUKaFtaG9b+PTpyzqCXNHn79aTdNoOP1Pk85rGvusXKZt2F6TcL/t9Jx/0NSWmUlr1nImtKT236WG+iaoSbjLedAmdfaVJ8jGp1nXNR7wtC3H/sQTkOAVVoqPPVI9jum/a183Zg3P3JFkYi6q/T6sGH9Aft972x59SD1QqtR9T6in/Zrl1Jk+f/YTqE8NqCoNtf/pHoBisnY2zp3zZrPnTnlvOWHH5Pj0VjMb7VnMmUX7ndd9OKyt8Nb7HDZn93q/y3ATfXg3rRs79e5EqypRRXi+DaN1p3Ob6IHZSFsbfgEQsbTWaONzOyznV1yarvFNTCk5XaDUpdaSRd7lNkvr26KRrNPaMrcgw9uWdwyzAW/TINO/LT81dUNRsYNDUdHGtGiT6g3FmpioMPdN9YWKizcUDhp5LmeVMeXudq253Y6/TeW22kYYUpkG9niiTeGal4xQYtjXpmikRi6YOrSssWEfUu6n+/wMsY8Ip23YwIzDMusjli2LbOjmeYwX6rsb9PeMaMjE4io2bDQDqQk8lHVq4kYeX+1VjfQfqz2/IbTYQZA0uXzj24FD+trowcuZF2/fr/jCybZRcHRSjd7P3LF4AeoA/P/Luxkw5Ff6f3Xyj9xD12r//hXdfP+vXKftZQ5ba5r4rwUX8I4nmXrSZkovXKWx6M/QF1oFUmpLgKkWswnzG40QqG4wOHfiJ2j6H7z9ng+jHbrX6dAyFEHSNGLPWraIRwtpDqoO89DQsgDtZuVs7jCAwBClDTM6OQi99kPS7RWyXnfRQnoG1bBv0NAbDGi3HpZ7dpgIHMogUC6JChBePYLzZVIhspCQn1+OYtViLhGXeHQ2SijxCBIWHJrO5KBSlBhigbIGCydJISIkZBIkm7sMFYtliJyQVaF8MriSJOXxISHCoicF82USAFlBQHGRUAIInnoIHJ+MlJB2J0GZz5dDYaqJcREVbS1uNhRBCe8fESZYaAM0Rylt1HYpg5VqYMKRSEJxkhBBRgKRzdtRYpiUQciLR1VB8ZGCVXaIy8ULEToJmyqDp1dL7nEPtAO3qJEiR4kaDfUIr8OlcGhomIAr5VeiQeF6SpRLBHEjvkwsPmb+CQWCeAAAAA==') format('woff2'),
  url('~@/iconfonts/iconfont.woff?t=1598233615452') format('woff'),
  url('~@/iconfonts/iconfont.ttf?t=1598233615452') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('~@/iconfonts/iconfont.svg?t=1598233615452#iconfont') format('svg'); /* iOS 4.1- */
}
```

参考地址：[https://uniapp.dcloud.io/frame?id=%e5%ad%97%e4%bd%93%e5%9b%be%e6%a0%87](https://uniapp.dcloud.io/frame?id=字体图标)

并且引入css的标准方式为：

```scss
@import url('./iconfonts/iconfont.css');
```

参考地址：[https://uniapp.dcloud.io/frame?id=css%e5%bc%95%e5%85%a5%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90](https://uniapp.dcloud.io/frame?id=css引入静态资源)

### 4、沉浸式状态栏只想在小程序显示，H5页面不想显示？

官网地址：https://uniapp.dcloud.io/collocation/pages?id=h5

官网写得还是比较晦涩的，具体用法：

在  `pages.json`  中：

```json
{
    "pages": [
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "首页",
				"h5": {
					"titleNView": false
				}
			}
		}
	]
}
```

### 5、uniapp的子传父

官网地址：https://uniapp.dcloud.net.cn/api/window/communication?id=emit

代码：

子组件：

```jsx
<image src="/static/images/logo.png" @tap="blockShow(1)"></image>

methods: {
    blockShow(arg){
        uni.$emit('blockshow', arg);
    }
}
```

父组件：

```js
onReady(){
    uni.$on('blockshow', function(arg){
        console.log(arg)
    })
},
```





