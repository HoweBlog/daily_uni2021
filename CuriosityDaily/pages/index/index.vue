<template>
	<view>
		<!-- header -->
		<MyHeader></MyHeader>

		<!-- swiper -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay"
			:indicator-active-color="indicatorColor">
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
			<view class="li">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay"
					:indicator-active-color="indicatorColor">
					<swiper-item v-for="item in bannerArr" :key="item.id">
						<image :src="item.imgSrc" mode="widthFix"></image>
						<view class="Copywriter">
							<view class="desc">$ 商业</view>
							<view class="title">和脚后跟被点击被点击电话局v记得 充电口 都很好看是大括号是DVD海康边框</view>
							<view class="GiveLike">
								<text class="iconfont icon-aixin"></text>
								<text>94</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from "../../components/MyHeader.vue"

	export default {
		data() {
			return {
				indicatorDots: true,
				bannerArr: [{
						"id": "banner01",
						"imgSrc": "/static/images/banner01.jpeg",
						"title": "“一直赚不到钱，一辈子也就这么过来了”｜汉口故事③"
					},
					{
						"id": "banner02",
						"imgSrc": "/static/images/banner02.png",
						"title": "小百货贩子、木材商人和作家，77 岁的王仁昌如何看待他的逆反一生｜汉口故事②"
					},
					{
						"id": "banner03",
						"imgSrc": "/static/images/banner03.jpg",
						"title": "“伊拉克还得开发十多年吧，开发完差不多我退休” | 大庆故事⑩"
					}
				],
				indicatorColor: '#ffc81f', // 指示点颜色
				autoplay: true, // 循环
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			MyHeader
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
		.li{
			margin-top: 10rpx;
			position: relative;
			.GiveLike{
				color: #FFFFFF;
			}
		}
	}
</style>
