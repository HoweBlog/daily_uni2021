<template>
	<view>
		<view class="SearchPage">
			<view class="SeachInput">
				<text class="iconfont icon-search"></text>
				<input type="text" value="" v-model="SearchVal" placeholder="搜索" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Search",
		data() {
			return {
				SearchVal:null,
			};
		}
	}
</script>

<style lang="scss">
.SearchPage{
	.SeachInput{
		margin: 30rpx 4%;
		background: #efefef;
		display: flex;
		justify-content: space-around;
		border-radius: 10rpx;
		text{
			display: block;
			font-size: 40rpx;
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			color: #999999;
		}
		input{
			flex: 1;
			height: 60rpx;
		}
	}
}
</style>
