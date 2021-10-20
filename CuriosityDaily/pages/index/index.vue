<template>
	<view>
		<!-- header -->
		<MyHeader />
		
		<Home />
		
	</view>
</template>

<script>
	import MyHeader from "../../components/MyHeader.vue"
	import Home from "../../components/Home.vue"

	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

		},
		components: {
			MyHeader,Home
		},
	}
</script>
<style lang="scss">
	
</style>
