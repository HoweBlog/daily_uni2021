<template>
	<view>
		<!-- header -->
		<MyHeader></MyHeader>
		
		<!-- swiper -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :indicator-active-color="indicatorColor">
			<swiper-item v-for="(item,index) in swiperImage" :key="index" >
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
<<<<<<< HEAD
					<view class="Copywriter">
						<view class="desc">
							<text class="iconfont icon-001danche-2"></text>
							Howe
						</view>
						<view class="title">100861110086111008611100861110086111008611100861110086111008611100861110086111008611100861110086111008611
						</view>
=======
					<view class="">
						
>>>>>>> 9a5d3629835b5572672d80fe272ff7e2a6581d96
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import MyHeader from "../../components/MyHeader.vue"
	
	export default {
		data() {
			return {
				indicatorDots:true,
				swiperImage:[
					"/static/images/banner01.jpeg",
					"/static/images/banner02.png",
					"/static/images/banner03.jpg",
				],
				indicatorColor:'#ffc81f', // 指示点颜色
				autoplay:true, // 循环
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{ MyHeader },
	}
</script>
<style lang="scss">	
	// 引入 css
	@import url('/iconfonts/iconfont.css');
	swiper{
		// 设置 swiper 高度
		height: calc(100vw * 450/755);
		swiper-item{
			position: relative;
			image{
				width: 100vw;
				filter: brightness(0.8);
			}
			.Copywriter{
				position: absolute;
				left: 0;
				bottom:40rpx;
				padding: 0 4%;
				width: 92%;
				.desc{
					background: rgba(0,0,0,0.5);
					display: inline-block;
					color: #ffc81f;
					font-size: 12rpx;
					padding: 0 2px;
					line-height: 24rpx;
					text{
						display: inline-block;
						margin-right: 8rpx;
					}
				}
				.title{
					margin-top: 10rpx;
					font-size: 46rpx;
					line-height: 46rpx;
					color: #fff;
					overflow: hidden;
				}
			}			
		}
	}
</style>
