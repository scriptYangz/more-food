<template>
	<div class="sell">
		<div class="sell-container">
			<div class="sell-title">
				今日推荐<span class="mt">sell</span>
			</div>
			<div class="sell-content">
				<el-carousel class="sell-content-left" height='100%' indicator-position='none'>
					<el-carousel-item v-for="item in sellBanner" :key="item">
						<router-link to="/"><img class="banner-img" :src="item" /></router-link>
					</el-carousel-item>
				</el-carousel>

				<ul class="sell-content-right">
					<FoodList v-for="(foodlist,index) in sellFoodList" :key="index" :foodlist="foodlist"></FoodList>
				</ul>
			</div>

		</div>
	</div>

</template>

<script>
	import FoodList from './FoodList'
	export default {
		name: 'Sell',
		props: {
			sellBanner: Array,
			sellFoodList: Array
		},
		components: {
			FoodList
		},
		data() {
			return {}
		},
		methods: {
			getSellInfo() {}
		},
		mounted() {
			this.getSellInfo()
		}

	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../../../assets/style/varibles.styl';
	.sell {
		padding-top: 8px;
	}
	
	.sell-container {
		width: $containerWidth;
		margin: 0 auto;
	}
	
	.sell-title {
		height: 37px;
		line-height: 30px;
		margin-bottom: 0px;
		font-family: "微软雅黑";
		font-size: 22px;
		font-weight: bold;
		color: #5DA700;
		border-bottom: 1px solid rgb(124, 213, 35);
		display: block;
		text-align: left;
		padding-left: 5px;
	}
	
	.mt {
		font-family: Arial, Helvetica, sans-serif;
		color: #bbb;
		font-size: 12px;
		margin-left: 2px;
		padding-left: 4px;
	}
	
	.sell-content {
		padding-top: 8px;
		height: 440px;
		width: 100%;
	}
	
	.sell-content-left {
		width: 230px;
		height: 100%;
		overflow: hidden;
		float: left;
	}
	
	.sell-content-right {
		float: left;
		width: 900px;
		height: 100%;
		overflow: hidden;
	}
</style>