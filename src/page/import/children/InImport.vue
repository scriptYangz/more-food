<template>
	<div class="Inimport">
		<div class="container">
			<div class="import-top">
				<p class="bread">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item v-if="classes" v-for="cla in classes" :to="{ path: './' }">
							<router-link class="breadlink" to="/">{{cla}}</router-link>
						</el-breadcrumb-item>
					</el-breadcrumb>
				</p>
			</div>

			<div class="import-content">
				<div class="left">
					<div class="classes">
						<div class="classes-title">
							选择国家
						</div>
						<ul class="classes-list">
							<li class="classes-li" v-for="item in conutries">
								<router-link class="classeslink" to="/">{{item}}</router-link>
							</li>
						</ul>
					</div>
					<LastVisit></LastVisit>
				</div>

				<div class="middle">
					<el-carousel class="banner" height='260px'>
						<el-carousel-item v-for="(item,index) in bannersrc" :key="index">
							<router-link to="/"><img class="banner-img" :src="item" /></router-link>
						</el-carousel-item>
					</el-carousel>

					<el-carousel class="friend" indicator-position="none" height='150px'>
						<el-carousel-item v-for="(item,index) in friends" :key="index">
							<div class="left-top"></div>
							<router-link class="friend-box-link" v-for="box of item" to="/">
								<div class="friend-box">
									<div class="friendbox-Img">
										<img :src="box.img" />
									</div>
									<div class="friendbox-right">
										<p>
											<router-link to="/" class="fbr-link">{{box.title}}</router-link>
										</p>
										<p class="fb-price">&yen;{{box.price | cPrice(box.price)}}</p>
										<p><button class="fri-btn">立即抢购</button></p>
									</div>
								</div>
							</router-link>
						</el-carousel-item>
					</el-carousel>

					<div class="sel">
						<dl>
							<dt>选择价格：</dt>
							<dd>
								<div class="flex">
									<router-link to="/">不限</router-link>
									<router-link v-for="item of ap" to="/" href="/">{{item}}</router-link>
								</div>
							</dd>
						</dl>
						<dl>

							<el-collapse accordion>
								<el-collapse-item>
									<template slot="title">
										<dt>选择品牌：</dt>

										<dd>
											<div class="flex">
												<router-link to="/">不限</router-link>
												<router-link v-for="item of firstline" to="/" href="/">{{item}}</router-link>
											</div>
										</dd>
									</template>
									
									    <dd class="more">
											<div class="flex">
												<router-link v-for="item of more" to="/" href="/">{{item}}</router-link>
											</div>
										</dd>

								</el-collapse-item>
							</el-collapse>

							</dd>
						</dl>
					</div>
					
					<div class="sell">
						<div class="selltitle">
					<ul class="selltitle-list">
						<li class="selltitle-li">默认</li>
						<li class="selltitle-li">销量<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">好评<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">最新<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">价格<span class="iconfont">&#xe60c;</span> </li>
					</ul>
				</div>
				<div class="sellcontent">
					<FoodBox v-if="foodlist.length" class="foodbox" v-for="food in foodlist" :food="food"></FoodBox>
				</div>
					</div>
					
					<Page :thispages="thispages"></Page>
				</div>

				<div class="right">
					<ul class="rightbox">
						<li class="rightboxlist">
							<router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/575563001460632034.jpg" /></router-link>
							<p>
								<router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link>
							</p>
						</li>
						<li class="rightboxlist">
							<router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/575563001460632034.jpg" /></router-link>
							<p>
								<router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link>
							</p>
						</li>
						<li class="rightboxlist">
							<router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/575563001460632034.jpg" /></router-link>
							<p>
								<router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link>
							</p>
						</li>
					</ul>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	import LastVisit from "../../public/LastVisit"
	import FoodBox from '../../public/FoodBox'
	import Page from '../../public/Page'
	export default {
		name: "InImport",
		data() {
			return {
				classes: ["首页", "进口食品"],
				conutries: ["泰国", "越南", "菲律宾", "韩国", "丹麦", "比利时", "美国", "阿联酋", "马来西亚", "西班牙", "澳大利亚", "葡萄牙", "日本", "加拿大", "印尼", "阿根廷", "法国", "英国", "意大利", "土耳其",
					"奥地利", "瑞士", "德国", "斯里兰卡"
				],
				bannersrc: ["http://img1.morefood.com/files/ads_new/875787001488875073.jpg",
					"http://img1.morefood.com/files/ads_new/485172001482982113.jpg",
					"http://img1.morefood.com/files/ads_new/176421001460631970.jpg",
					"http://img1.morefood.com/files/ads_new/857378001493974783.jpg"
				],
				friend: [{
						img: "http://img1.morefood.com/files/ads_new/764435001460632298.jpg",
						title: "宿雾 芒果干100g/袋*5",
						price: 49.9
					},
					{
						img: "http://img1.morefood.com/files/ads_new/083425001481705792.jpg",
						title: "和情 焦糖饼干700g/袋 比利时进口",
						price: 29.9
					},
					{
						img: "http://img1.morefood.com/files/ads_new/401045001460632407.jpg",
						title: "海牌 小力士原味鱼肠20g*15支 韩国进口",
						price: 39.9
					}
				],
				ap: ["0-5", "5-10", "10-20", "20-50", "50-100", "100-200"],
				sbrand:["悠哈","格力高","德诚","乐天","费列罗","韩国农协","青右芭喜","小力士", "咔咔莎", "马奇新新", "新苗向日葵", "百乐可", "诺滋客",
				"九日", "吉力贝", "茱莉斯", "小老板", "奇乐达", "得乐思","闲趣", "哈唬哈唬牌", "丽芝士", "榙榙", "三养", "瑞士小姐"],
				foodlist:[{
					"id":20,	
					"img":"http://img1.morefood.com/files/ads_new/401434001481104982.jpg",
					"title":"丹夫 华夫饼（奶油味）168g",
					"price":10.8,
					"oldprice":12,
					"sellout":true,
					"edunum":3367
					},
					{
					"id":21,
					"img":"http://img1.morefood.com/files/ads_new/272029001481104989.jpg",
					"title":"台湾零食 77牌 蜜兰诺松塔192g",
					"price":21.6,
					"oldprice":29.9,
					"edunum":347,
					"discount":"超级满减 满99减50"
					},
					{
					"id":22,
					"img":"http://img1.morefood.com/files/ads_new/241218001481104996.jpg",
					"title":"友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口",
					"price":16.2,
					"oldprice":23,
					"discount":"超级满减 满199减80",
					"edunum":3367},
					{
					"id":23,
					"img":"http://img1.morefood.com/files/ads_new/394929001481105002.jpg",
					"title":"盼盼 手撕面包1kg/箱",
					"price":35,
					"oldprice":45,
					"edunum":2227,
					"discount":"超级满减 满199减80"
					},
					{
					"id":23,
					"img":"http://img1.morefood.com/files/ads_new/394929001481105002.jpg",
					"title":"盼盼 手撕面包1kg/箱",
					"price":35,
					"oldprice":45,
					"edunum":2227,
					"discount":"超级满减 满199减80"
					}
				],
					thispages:null
			}
		},
		computed: {
			friends() {
				let arr = [];
				let temp = [];
				for(var i = 0; i < this.friend.length; i++) {
					if((i + 1) % 2 === 0) {
						temp.push(this.friend[i])
						arr.push(temp)
						temp = [];
					} else {
						temp.push(this.friend[i])
						if(i === this.friend.length - 1) {
							arr.push(temp)
						}
					}

				}
				console.log(arr)
				return arr;
			},
			firstline(){
				let firstline=[];
				for(let i=0;i<this.sbrand.length;i++){
					if(i<6){
						firstline.push(this.sbrand[i])
					}
				}
				return firstline;
			},
			more(){
				let more= [];
				for(let i=0;i<this.sbrand.length;i++){
					if(i>=6){
						more.push(this.sbrand[i])
					}
				}
				return more;
			}
		},
		components: {
			LastVisit,
			FoodBox,
			Page
		},
		filters: {　　　　　　
			cPrice: function(price) {　　　　　　　　
				return parseFloat(price).toFixed(2).toString()　　　　　　
			}　　
		},
		mounted() {}

	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../../../assets/style/varibles.styl';
	.container {
		width: $containerWidth;
		margin: 0 auto;
	}
	
	.import-top {
		background: url(http://img1.morefood.com/template/template3/images/home-20-48.png) no-repeat left center;
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		height: 50px;
	}
	
	.bread {
		display: block;
		height: 45px;
		margin-left: 20px;
		line-height: 45px;
		font-family: Arial, Helvetica, sans-serif;
		color: #000;
	}
	
	.el-breadcrumb {
		line-height: 45px;
	}
	
	.breadlink {
		font-size: 12px;
	}
	
	.breadlink:hover {
		color: $mainColor;
	}
	
	.import-content {
		width: 100%;
	}
	
	.classes {
		font-size: 12px;
		width: 160px;
		border: 5px solid #e1e1e1;
		display: inline-block;
	}
	
	.classes-title {
		height: 26px;
		font-size: 14px;
		text-align: left;
		text-indent: 2em;
		line-height: 26px;
		color: #fff;
		background-color: $mainColor;
		font-weight: bold;
		border-bottom: 1px dotted #e1e1e1;
	}
	
	.classes-li {
		height: 26px;
		line-height: 26px;
		border-bottom: 1px dotted #e1e1e1;
		text-indent: 2em;
	}
	
	.classeslink {
		color: #4b4b4b;
		text-decoration: none;
	}
	
	.classeslink:hover {
		color: $mainColor;
	}
	
	.left {
		width: 170px;
		float: left;
	}
	
	.right {
		float: left;
		margin-left: 16px;
		width: 170px;
		
	}
	
	.right a {
		font-size: 12px;
		color: #4B4B4B;
		display: block;
		text-decoration: none;
		line-height: 1.3em;
	}
	
	.right a:hover {
		color: $mainColor;
	}
	
	.rightboxlist {
		margin-bottom: 20px;
	}
	
	.rightboxImg {
		border:1px solid #e1e1e1;
		width: 100%;
	}
	
	.middle {
		width: 755px;
		margin-left: 16px;
		float: left;
	}
	
	.el-carousel {
		width: 100%;
		overflow-y: hidden;
	}
	
	.banner-img {
		width: 100%;
		height: 100%;
	}
	
	.friend {
		width: 755px;
		height: 150px;
		margin: 20px auto 10px;
		background: #f1f1f1;
		position: relative;
	}
	
	.left-top {
		width: 45px;
		height: 50px;
		background: url(http://img1.morefood.com/template/template3/images/mptj.png) no-repeat;
		background-position: 0 0;
		position: absolute;
		display: block;
		left: 5px;
		top: -4px;
	}
	
	.friend-box {
		display: inline-block;
		position: relative;
		font-size: 12px;
		background-color: #fff;
		padding: 0 2px;
	}
	
	.friendbox-Img {
		height: 106px;
		width: 106px;
		display: inline-block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
	}
	
	.friendbox-Img img {
		height: 100%;
		width: 100%;
	}
	
	.friendbox-right {
		width: 194px;
		height: 106px;
		padding: 10px 0;
		margin-left: 126px;
		display: inline-block;
	}
	
	.friendbox-right a {
		text-decoration: none;
		color: #4B4B4B;
		line-height: 20px;
	}
	
	.friendbox-right a:hover {
		color: $mainColor;
	}
	
	.fb-price {
		height: 36px;
		line-height: 36px;
		font-family: Arial, "微软雅黑";
		font-size: 20px;
		color: #f50;
		font-weight: bold;
	}
	
	.fri-btn {
		height: 26px;
		text-align: center;
		float: left;
		color: #fff;
		font-size: 15px;
		font-weight: bold;
		background: #68bb00;
		border-radius: 3px;
		cursor: pointer;
		outline: none;
		border: none;
		padding: 0 20px;
		padding-bottom: 2px;
	}
	
	.friend-box-link {
		display: block;
		position: relative;
		float: left;
		margin-left: 50px;
		margin-top: 10px;
	}
	
	.sel {
		float: left;
		font-size: 13px;
		border: 1px solid #e1e1e1;
	}
	
	.sel dl {
		display: block;
		float: left;
		border-bottom: 1px dotted #e1e1e1;
		width: 100%;
		line-height: 49px;
	}
	
	.sel dt,
	.sel dd {
		display: block;
		float: left;
	}
	
	.sel dt {
		padding-left: 10px;
	}
	
	.sel dd {
		float: left;
		padding-left: 20px;
	}
	
	.sel dd a {
		text-decoration: none;
		color: #4b4b4b;
		display: inline-block;
	}
	
	.flex {
		display: flex;
		max-width: 580px;
		white-space: normal;
		flex-wrap: wrap;
	}
	
	.flex a {
		min-width: 80px;
		height: 49px;
	}
	
	.flex a:hover {
		color: $mainColor;
	}
	.sel .more{
		padding-left: 95px;
	}
	
	
	
	.sell{
		clear: both;
		font-size: 12px;
		padding-top: 20px;
	}
.iconfont{
	color: #aeaeae;
	font-size: 8px; 
}
.selltitle{
	height: 40px;
	width: 100%;
	background-color: #f7f7f7;
}
.selltitle-li{
	height: 40px;
	width: 71px;
	text-align: center;
	line-height: 40px;
	border-right: 1px solid #dddddd;
	float: left;
	cursor: pointer;
}
.selltitle-li:hover{
	color: $mainColor;
}

.sellcontent{
	margin-top: 10px;
}
.sell a{
	font-size: 12px;
}
.foodbox{
	float: left;
}
.page{
	float: left;
}
</style>