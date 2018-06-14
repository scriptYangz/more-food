<template>
	<div class="new">
		<div class="new-title">
			新鲜品尝<span class="mt">new</span>
		</div>
		<ul class="new-container">
			<FoodList v-for="(foodlist,index) in newFoodList" :key="index" :foodlist="foodlist"></FoodList>
		</ul>
		<div class="new-bottom">
			<router-link class='new-bottom-link' to='/'><img class="new-bottom-img" :src="bottomImg" /></router-link>
		</div>
	</div>
</template>

<script>
	import FoodList from './FoodList'
	export default {
		name: 'New',
		props: {
			newFoodList: Array,
			bottomImg: String
		},
		components: {
			FoodList
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/style/varibles.styl';
	.new {
		width: $containerWidth;
		margin: 0 auto;
	}
	
	.new-container {
		padding: 10px 0;
		height: 215px;
		overflow: hidden;
	}
	
	.new-title {
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
	
	.new-bottom {
		height: 120px;
		width: 100%;
	}
	
	.new-bottom-link {
		display: block;
		height: 100%;
		width: 100%;
	}
	
	.new-bottom-img {
		height: 100%;
		width: 100%;
	}
</style>