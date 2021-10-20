<template>
	<view>
		<!-- header -->
		<MyHeader />
		
		<Home v-if="flag" />
		
		<Search v-else/>
		
	</view>
</template>

<script>
	import MyHeader from "../../components/MyHeader.vue"
	import Home from "../../components/Home.vue"
	import Search from "../../components/Search.vue"

	export default {
		data() {
			return {
				flag:true
			}
		},
		onLoad() {
			
		},
		onReady(){
			let that = this;
			uni.$on("IsShowPage",(pre)=>{
				// 这里的this 是指 uni
				that.flag = pre;
			})
		}, // 监听页面初次渲染完成
		methods: {

		},
		components: {
			MyHeader,Home,Search
		},
	}
</script>
<style lang="scss">
	
</style>
