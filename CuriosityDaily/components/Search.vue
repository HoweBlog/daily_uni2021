<template>
	<view>
		<view class="SearchPage">
			<view class="SeachInput">
				<text class="iconfont icon-search"></text>
				<input type="text" value="" v-model="SearchVal" placeholder="搜索" />
			</view>
		</view>
		<view class="SearchTitle">
			大家都在搜索
		</view>
		<view class="keywords">
			<text v-for="(item,index) in Words" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Search",
		data() {
			return {
				SearchVal:null,
				Words:[],
			};
		},
		created(){
			console.log(10086)
			// 调用云函数
			uniCloud.callFunction({
			    name: 'getNews', // 云函数的函数 name
				data:{
					name:"keywords", // 客户端上传的参数 -- 对应的数据表
				}
			  }).then(res=>{
				  console.log("getNews",res.result[0].arr);
				  if(res.result[0].arr) { 
					  this.Words = res.result[0].arr;
				  }
			  }).catch(err=>{
				  if(err) console.log(err);
			  })
		},
	}
</script>

<style lang="scss" scoped>
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
.SearchTitle{
	margin: 0 5%;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 40rpx;
	border-bottom: 2px solid #efefef;
}
.keywords{
	margin: 0 5%;
	display: flex;
	justify-content: flex-start;
	flex-wrap:wrap;
	padding-top: 20rpx;
	text{
		// display: block;
		width: 33.33%;
		line-height: 60rpx;
		font-size: 28rpx;
	}
}
</style>
