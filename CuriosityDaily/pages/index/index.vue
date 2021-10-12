<template>
	<view>
		<MyHeader></MyHeader>
		
		<swiper class="swiper" :indicator-dots="indicatorDots">
			<swiper-item>
				<view class="swiper-item" v-for="(item,index) in swiperImage" :key="index">
					<image :src="item" mode="widthFix"></image>
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
					"../../static/images/banner01.jpeg",
					"../../static/images/banner02.png",
					"../../static/images/banner03.jpg",
				]
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
	swiper{
		// 设置 swiper 高度
		height: calc(100vw * 450/755);
		image{
			width: 100vw;
		}
	}
</style>
