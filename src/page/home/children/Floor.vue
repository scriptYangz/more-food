<template>
	<div class="floor clearfix">
		<div class="floor-title">
			<span class="floor-title_sjx"><img class="sjx-img" src="../../../assets/img/1.png"/></span>
			<div class="floor-title_number" id="float01">{{index+1}}F</div>
			<span class="floor-title_titmz">{{floorname}}</span>
			<ul class="floor-title-right">
				<li class="floor-title-right-list" v-for="item in floorright">
					<router-link class='floor-title-right-link' to='/'>{{item}}</router-link><span class="line"></span></li>
			</ul>
		</div>
		<div class="floor-content">
			<div class="floor-content-left ">
				<router-link class='floor-content-left-link' to='/'><img class="floor-content-left-img" :src="floorimg" /></router-link>
				<ul class="floor-content-left-list">
					<li class="malf-znav" v-for='item in malf'>
						<router-link class='malf-znav-link' to='/'>{{item}}</router-link>
					</li>
				</ul>
				<div class="floor-content-left-bottom">
					<router-link class='floor-left-bottom-link' v-for='(item,index) in logos' :key="index" to='/'><img class="floor-left-bottom-img" :src="item" /></router-link>
				</div>
			</div>
			<ul class="floor-content-main">
				<FoodList v-for="(foodlist,index) in foodlists" :foodlist="foodlist" :key="index"></FoodList>
			</ul>
			<div class="floor-content-rigth">
				<div class="floor-content-rigth-title">
					{{evaluate.name}}
				</div>
				<ul class="evaluate">
					<li v-for="item in evaluate.list" class="evaluate-li">
						<router-link class='evaluate-left' to='/'><img class='evaluate-left-img' :src="item.img" /></router-link>
						<div class="evaluate-right">
							<p class="evaluate-child">
								<router-link class='evaluate-name' to='/'>{{item.title}}</router-link>
							</p>
							<p class="evaluate-child weight"><img class="evaluate-star" :src="nStarImg(item) || starImg" />{{item.star}}分</p>
							<span class="evaluate-child weight tag">商品评价标签：</span>
							<p class="evaluate-child evaluate-tagcontainer"><span v-for="tag in item.tag" class="evaluate-tag">{{tag}}</span></p>
						</div>
					</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
	import FoodList from './FoodList'
	export default {
		name: 'Floor',
		props:{
			floor:Object,
			index:Number
		},
		data() {
			return {
				floorname:"",
				floorimg:"",
				floorright: [],
				malf:[],
				logos:[],
				foodlists:[],
				evaluate:{},
				starImg:"http://img1.morefood.com/template/template3/images/star_5.gif"
			}
		},
		components: {
			FoodList
		},
		methods:{
			getFloorInfo(){
				if(this.floor){
					this.floorname = this.floor.name
					this.floorright = this.floor.content.hot
					this.floorimg = this.floor.content.bigsrc
					this.malf = this.floor.content.malf
					this.logos = this.floor.content.malflogo
					this.foodlists = this.floor.content.foodlist
					this.evaluate = this.floor.content.evaluate
				}
			},
			nStarImg:function(item){
				if(item.star<5 && item.star>4){
					return "http://img1.morefood.com/template/template3/images/star_4.5.gif"
				}
			}
		},
		mounted(){
			this.getFloorInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/style/varibles.styl';
	@import '../../../assets/style/reset.css';
	.floor {
		width: $containerWidth;
		margin: 0 auto;
		
	}
	
	.floor-title {
		height: 38px;
		line-height: 38px;
		border-bottom: 1px solid $mainColor;
	}
	
	.floor-title_sjx {
		height: 6px;
		width: 6px;
		position: relative;
		left: 0px;
		top: 33px;
		display: block;
	}
	
	.sjx-img {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
	
	.floor-title_number {
		width: 30px;
		font-family: Impact, Arial, Helvetica, sans-serif;
		font-size: 20px;
		color: #65B600;
		float: left;
		padding-left: 15px;
		width: 28px;
		padding-left: 12px;
	}
	
	.floor-title_titmz {
		width: 80px;
		line-height: 35px;
		display: block;
		font-family: Microsoft YaHei;
		font-size: 18px;
		font-weight: bold;
		color: #000;
		float: left;
	}
	
	.floor-title-right {
		float: right;
		font-size: 12px;
		color: #4b4b4b;
	}
	
	.floor-title-right-list {
		float: left;
		position: relative;
		line-height: 38px;
	}
	
	.floor-title-right-link {
		text-decoration: none;
		padding: 0 8px;
		color: #4b4b4b;
	}
	
	.floor-title-right-link:hover {
		color: $mainColor;
	}
	
	.line {
		width: 1px;
		height: 10px;
		background-color: #4b4b4b;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.floor-title-right-list:last-child .line {
		display: none;
	}
	
	.floor-content {
		height: 462px;
		width: 100%;
		border: 1px solid #e1e1e1;
		border-top: none;
		position: relative;
	}
	
	.floor-content-left {
		height: 440px;
		width: 305px;
		margin: 10px 0 0 10px;
		float: left;
		padding: 0;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.floor-content-left-bottom {
		height: 170px;
		width: 100%;
		overflow: hidden;
	}
	
	.floor-content-left-link {
		display: block;
		height: 220px;
		width: 305px;
	}
	
	.floor-content-left-img {
		height: 100%;
		width: 100%;
	}
	
	.floor-content-left-img:hover {
		opacity: .7;
	}
	
	.floor-content-left-list {
		width: 100%;
		overflow: hidden;
		height: 50px;
	}
	
	.malf-znav {
		height: 100%;
		width: 32%;
		background-color: $mainColor;
		float: left;
		margin-left: 2px;
		font-size: 16px;
		text-align: center;
		line-height: 50px;
	}
	
	.malf-znav-link {
		width: 100%;
		height: 100%;
		float: left;
		background: #65B600;
		font-family: Microsoft YaHei;
		font-size: 18px;
		text-decoration: none;
		color: #FFF;
		line-height: 46px;
		margin-right: 2px;
		display: block;
	}
	
	.malf-znav-link:hover {
		color: $mainColor;
		background-color: #e4ecdb;
	}
	
	.floor-left-bottom-link {
		width: 150px;
		height: 78px;
		margin-top: 2px;
		display: block;
		float: left;
	}
	
	.floor-left-bottom-link:hover {
		background-color: #e8e8e8;
	}
	
	.floor-left-bottom-img {
		width: 100%;
		height: 100%;
	}
	
	.floor-left-bottom-img:hover {
		opacity: .7;
	}
	
	.floor-content-main {
		height: 455px;
		width: 460px;
		float: left;
		overflow: hidden;
		position: absolute;
		left: 315px;
		top: 10px;
	}
	
	.floor-content-rigth {
		height: 440px;
		width: 342px;
		position: absolute;
		right: 0;
		top: 10px;
		overflow: hidden;
	}
	
	.floor-content-rigth-title {
		height: 32px;
		width: 100%;
		font-size: 14px;
		color: #fff;
		font-weight: bold;
		background-color: $mainColor;
		text-align: center;
		line-height: 32px;
	}
	
	.evaluate-left {
		width: 130px;
		height: 130px;
		display: block;
		float: left;
	}
	
	.evaluate-left-img {
		width: 100%;
		height: 100%;
	}
	
	.evaluate-li {
		height: 130px;
		width: 100%;
		font-size: 12px;
		margin-top: 4px;
	}
	
	.evaluate-name {
		text-decoration: none;
		color: #4b4b4b;
	}
	
	.evaluate-name:hover {
		color: $mainColor;
	}
	
	.evaluate-child {
		padding: 10px 0;
	}
	.weight{
		color: #000;
		font-weight:bold ;
	}
	.evaluate-star{
		margin-right: 2px;
	}
	.tag{
		font-size: 14px;
	}
	.evaluate-tagcontainer{
		padding: 20px 4px;
		overflow: hidden;
		white-space: nowrap;
	}
		.evaluate-tag{
			background-color: #e0f9cf;
			padding: 2px 10px;
			margin-right: 4px;
			color: #555555;
			border-radius: 2px;
		}
</style>