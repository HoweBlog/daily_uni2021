<template>
	<view>
		<!-- swiper -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true"
			indicator-active-color="#ffc81f">
			<swiper-item v-for="item in bannerArr" :key="item.id">				
				<image :src="item.imgSrc" mode="widthFix"></image>
				<view class="Copywriter">
					<view class="desc"><text class="iconfont icon-001danche-2"></text>文化 · 长文章</view>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="list">
			<view class="li" v-for="item in articleArr" :key="item.id">
				<image :src="item.imgSrc" mode="widthFix"></image>
				<view class="Copywriter">
					<view class="desc">$ 商业</view>
					<view class="title">{{item.title}}</view>
					<view class="GiveLike">
						<text class="iconfont icon-aixin"></text>
						<text>{{item.love}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Home",
		data() {
			return {
				bannerArr: [], // 第一项轮播图
				articleArr:[], // 商业数据
			};
		},
		created(){
			console.log(10086)
			// 调用云函数
			uniCloud.callFunction({
			    name: 'getNews', // 云函数的函数 name
				data:{
					name:"news", // 客户端上传的参数
				}
			  }).then(res=>{
				  console.log("getNews",res.result);
				  if(res.result) { 
					  let { articleArr,bannerArr} = res.result[0];
					  this.articleArr = articleArr; // 商业数据
					  this.bannerArr = bannerArr; // 商业数据
				  }
			  }).catch(err=>{
				  if(err) console.log(err);
			  })
		},
	}
</script>

<style lang="scss">
// 引入 css --  全局引入
	// @import url('/iconfonts/iconfont.css');
	swiper {
		// 设置 swiper 高度
		height: calc(450/755*100vw);
		swiper-item {
			position: relative;
			image {
				width: 100vw;				
				filter: brightness(0.8);
			}
		}
	}
	.Copywriter {
		position: absolute;
		left: 0;
		bottom: 40rpx;
		padding: 0 4%;
	
		.desc {
			background: rgba(0, 0, 0, .5);
			color: #ffc81f;
			font-size: 28rpx;
			padding-right: 10rpx;
			display: inline-block;
	
			.iconfont {
				margin: 0 10rpx;
			}
		}
	
		.title {
			color: #fff;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
	
		}
	}
	.list{
		width: 100vw;
		image{
			width: 100%;
		}
		.li{			
			margin-top: 10rpx;
			position: relative;
			.GiveLike{
				margin: 6rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				text{
					line-height: 20rpx;
				}
				.iconfont{
					font-size: 20rpx;
				}
			}
		}
	}
</style>
