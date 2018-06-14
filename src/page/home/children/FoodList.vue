<template>
	<li class="foodlist">
		<div class="foodlist-top">
			<router-link class='foodlist-top-link' to='/'> <img class="foodlist-top-img" :src="foodImg" /></router-link>
		</div>
		<div class="foodlist-title">
			<router-link class='foodlist-title-link' :to ="{name:'Detail',params :{id:this.id},query:{empty:false}}" :title='foodName'>{{foodName}}</router-link>
		</div>
		<div class="foodlist-price">
			<span class="buyq">&yen;</span>
			<span class="price">{{price | cPrice}}</span>
			<span class="oldprice">{{oldprice | cPrice}}</span>
			<div class="tobuy">
				<router-link class='tobuy-link' to='/'><img src="http://img1.morefood.com/template/template3/images/icon_cart2.png" /></router-link>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		name: 'FoodList',
		props: {
			foodlist: Object
		},
		data() {
			return {
				foodImg: "",
				foodName: "",
				price: "",
				oldprice: "",
				id:0
			}
		},
		methods: {
			getFoodList() {
				if(this.foodlist) {
					this.foodImg = this.foodlist.img
					this.foodName = this.foodlist.title
					this.price = this.foodlist.price
					this.oldprice = this.foodlist.oldprice
					this.id = this.foodlist.id
				}
			}
		},
		filters: {　　　　　　
			cPrice: function(price) {　　　　　　　　
				return parseFloat(price).toFixed(2).toString()　　　　　　
			}　　
		},
		mounted() {
			this.getFoodList()
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/style/varibles.styl';
	.foodlist {
		width: 213px;
		height: 213px;
		border: 1px solid #eee;
		display: block;
		overflow: hidden;
		float: left;
		margin-left: 10px;
		margin-bottom: 10px;
	}
	
	.foodlist-top {
		width: 215px;
		height: 150px;
	}
	
	.foodlist-top-link {
		display: block;
		height: 100%;
		width: 100%;
	}
	
	.foodlist-top-img {
		height: 100%;
		width: 100%;
	}
	
	.foodlist-top-img:hover {
		opacity: .8;
	}
	
	.foodlist-title {
		width: 213px;
		height: 30px;
		font-size: 8px;
		padding: 0 8px;
	}
	
	.foodlist-title-link {
		display: block;
		height: 100%;
		width: 100%;
		line-height: 30px;
		font-family: Arial, "宋体";
		color: #333;
		font-size: 12px;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.foodlist-title-link:hover {
		color: $mainColor;
	}
	
	.foodlist-price {
		font-size: 12px;
		position: relative;
		padding: 0 8px;
	}
	
	.buyq {
		font-family: Arial, '微软雅黑' !important;
		font-size: 12px;
		color: #F60;
	}
	
	.oldprice {
		font-family: Arial, '微软雅黑';
		font-size: 12px;
		color: #ffa169;
		text-decoration: line-through;
	}
	
	.price {
		width: 197px;
		padding: 0 8px;
		height: 30px;
		line-height: 27px;
		font-family: impact, Arial, Helvetica, sans-serif;
		font-size: 22px;
		color: #ff5500;
		position: relative;
	}
	
	.tobuy {
		width: 34px;
		height: 34px;
		display: block;
		position: absolute;
		right: 9px;
		bottom: 0;
		cursor: pointer;
	}
	
	.tobuy-link {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>