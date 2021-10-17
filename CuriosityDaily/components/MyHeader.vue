<template>
	<view class="header">
		<image src="../static/images/logo.png" mode="widthFix"></image>
		<text class="iconfont icon-search"></text>
	</view>
</template>

<script>
	export default {
		name:"MyHeader",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	// 引入 css
	// @import url('/iconfonts/iconfont.css');
	.header{
		background: #000;
		height: 88rpx; // == 44px
		padding: 6rpx 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image{
			width: 25%;
		};
		text{
			color: #eee;
		};
	}
</style>
