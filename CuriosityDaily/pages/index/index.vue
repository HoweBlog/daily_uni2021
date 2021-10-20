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
				flag:false
			}
		},
		onLoad() {
			
		},
		methods: {

		},
		components: {
			MyHeader,Home,Search
		},
	}
</script>
<style lang="scss">
	
</style>
