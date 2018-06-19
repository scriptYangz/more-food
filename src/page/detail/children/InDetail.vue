<template>
	<div>
		<div class="container">
		    <div class="detail-top">
		    	<p class="bread">
		    		<el-breadcrumb separator="/">
					  <el-breadcrumb-item v-if="classes" v-for="cla in classes" :to="{ path: './' }"><router-link class="breadlink" to="/">{{cla}}</router-link></el-breadcrumb-item>
					</el-breadcrumb>
		    	</p>
		    </div>
		    
		    <div class="detail-content">
		    	<div class="classes">
		    		<div class="classes-title">
		    			口味细分
		    		</div>
		    		<ul class="classes-list">
		    			<li class="classes-li" v-for="item in declasses"><router-link class="classeslink" to="/">{{item}}</router-link></li>
		    		</ul>
		    	</div>
		    	
		    	<div class="spxq">
		    			<div class="spxq-left-01"><img class="spxq-img" :src="spxqImg" alt="拉友 桂西北甜栗100g/袋 广西特产">
		    			<ul class="spxq-litimgs">
		    				<li class="spxq-litimgs-li" @mouseenter="spxqmouseenter(item)" v-for="(item,index) in spxqImgs"><img class="litimgs" :src="item"/></li>
		    			</ul>
		    			</div>
		    			<div class="spxq-middle">
		    				<div class="product-title">
		    					拉友 桂西北甜栗100g/袋 广西特产
		    				</div>
		    				<div class="produce-td">
		    					超好吃的甜栗，根本停不下来
		    				</div>
		    				<ul class="pro-info">
		    					<li class="pro-info-li">商品编号：{{proNumber}}</li>
		    					<li class="pro-info-li">猫&nbsp; 诚 &nbsp;价：<span class="price">￥{{Price}}</span></li>
		    					<li class="pro-info-li">品 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：<router-link class="pro-info-link" to="/">{{prolink}}</router-link> </li>
		    					<li class="pro-info-li">馋猫指数：<img width="60" height="12" :src="starImg"> {{edScore}}分 （已有{{edPeople}}人评价）</li>
		    				</ul>
		    				<div class="discounts">
		    					优惠信息：
		    				</div>
		    				<div class="discounts-info">
		    					{{discountinfo}}
		    				</div>
		    				<div class="buy">
		    					我&nbsp; 要&nbsp; 买：&nbsp; &nbsp;&nbsp; 
		    					<span class="squake" @click="countChange(-1)">-</span>
		    					<span ><input class="nowNumber" type="text" v-model="num"/></span>
		    					<span class="squake" @click="countChange(1)">+</span>
		    					<span class="hj">合计：<span class="totalprice">&yen;{{totalprice}}</span></span>
		    				</div>
		    				<div class="vip">
		    					会员积分：普通【<span class="integral">{{common}}</span>】 高级【<span class="integral">{{common*2}}</span>】VIP【<span class="integral">{{common*4}}</span>】
		    				</div>
		    				<div class="but">
		    					<router-link class="addbut buy-but" to="/">加入购物车</router-link>
		    					<router-link class="imbut buy-but" to="/">立即购买</router-link>
		    				</div>
		    				<div class="server">
						          <span>购满80元全国包邮</span><span>防碎包装&nbsp;安全配送</span>
						          <span>七天无理由退换货</span><span>安心购买&nbsp;售后无忧</span>
		    				</div>
		    			</div>
		    			
		    			<div class="spxq-right">
					              <ul class="sr-list">
					                  <li class="sr-li" v-for="item in li"><router-link to="/" title=""><img src="http://img1.morefood.com/files/images2016/180-180/list-10000408-31398-180-180.jpg" alt="趣多多 香脆曲奇（咖啡味）95/袋" border="none" width="125" height="125"></router-link>
					                  	
					                  </li>
					              </ul>
					    </div>
		    </div>
		       <LastVisit class="lastvisit"></LastVisit>
		       
		       
		       <div class="preference">
		       	 <div class="preference-title">
		       	 	最佳组合
		       	 </div>
		       	 <div class="preference-content">
		       	 	<div class="preference-left">
		       	 		<img class="preference-img" src=""/>
		       	 		<router-link class="preference-link" to="/">臧老爷子蜜麻花芝麻味130g/袋北京特产</router-link>
		       	 		<p><span class="thisfood">￥4.50</span></p>
		       	 	</div>
		       	 	<div class="preference-middle">
		       	 		+
		       	 	</div>
		       	 	<ul class="preference-right">
		       	 		<li class="preference-li" v-for="item in preadd"><img class="preference-img" src=""/>
		       	 	<router-link class="preference-link" to="/">臧老爷子蜜麻花芝麻味130g/袋北京特产</router-link>
		       	 	<p><input type="checkbox" v-model="precheckbox" :value="item"/><span>￥4.50</span></p>
		       	 		</li>
		       	 	</ul>
		       	 </div>
		       	  <div class="preference-bottom">
		       	 	<span class="select">已选择：<span class="prenum">{{prenum}}</span> 个</span>
		       	 	<span  class="zh">组合价：<span class="comra">&yen;{{comra}}</span></span>
		       	 	<router-link class="addbutpref preference-but" to="/">加入购物车</router-link>
		    		<router-link class="imbutpref preference-but" to="/">立即购买</router-link>
		       	 </div>
		       </div>
		       
		       <div class="tx">
		       	<router-link to="/"><img src="http://img1.morefood.com/files/ads_new/115798001488875434.jpg"/></router-link>
		       </div>
		       
		       <div class="cpxq">
		       	<p class="cpxq-li"><img class="cpxq-img" alt="" src="http://img1.morefood.com/files/upload/053026001519635152.jpg"></p>
		       </div>
		       
		       <div class="edu">
		       	  	<ul class="edu-nav">
		       	  		<li class="edu-li" v-for="item in eduNav"><router-link class="edu-link" to="/">{{item}}</router-link></li>
		       	  	</ul>
		       	  	<div class="edu-content">
		       	  		<div class="edu-content-top">
		       	  			<span class="sr1"><img src="http://img1.morefood.com/template/template3/images/xiangqingye-03.png" width="252" height="52"></span>
		       	  		    <span class="sr2"><router-link to="/" class="sr2-link">我买过，现在评价</router-link></span>
		       	  		</div>
		       	  		
		       	  	</div>
		       </div>
		    </div>
		 
		    
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
import LastVisit from '../../public/LastVisit'
export default{
	name:"InDetail",
	data(){
		return{
			classes:['口味细分','辣味'],
			declasses:['甜味','辣味','咸味','酸味','五香味','海鲜味','无糖','其他'],
			spxqImg:"",
			spxqImgs:["http://img1.morefood.com/files/images2016/400-400/list-2728-24919-400-400.jpg",
			"http://img1.morefood.com/files/images2016/400-400/list-2728-19401-400-400.jpg",
			"http://img1.morefood.com/files/images2016/400-400/list-2728-14981-400-400.jpg",
			"http://img1.morefood.com/files/images2016/400-400/list-2728-13231-400-400.jpg"],
			edPeople:23,
			edScore:5,
			proNumber:"AM02543",
			price:4.5,
			starImg:"http://img1.morefood.com/template/template3/images/star_4.5.gif",
			prolink:"拉友",
			discountinfo:"全国满80包邮",
			num:1,
			common:30,
			li:["li","li","li"],
			comra:0,
			preadd:[{
				price:4.5
			},{
				price:4.6
			},{
				price:4.7
			}],
			precheckbox:[],
			eduNav:["猫友评价","售后服务","配送说明","安心包装","如何支付","我要提问"]
			
		}
	},
	methods:{
		init(){
			this.spxqImg = this.spxqImgs[0]
		},
		//获取商品id
		getDetailId(){
			if(this.$route.params.id){
				this.id = this.$route.params.id
			}
		},
		getDetailInfo() {
				axios.get('/api/detail.json').then(this.getDetailInfoSucc)
	   },
		getDetailInfoSucc(res){
			var res = res.data
				if(res.ret && res.content) {
/*					this.bannersrc = res.content.banner.bannersrc
					this.foodclass = res.content.banner.foodclass
					this.bannerbottom = res.content.banner.bannerbottom
					this.floors = res.content.main.floor
					this.sellBanner = res.content.main.sell.bannersrc
					this.sellFoodList = res.content.main.sell.foodlists
					this.newFoodList = res.content.main.new.foodlists
					this.bottomImg = res.content.main.new.bottomImg
					this.didamaoBanner = res.content.main.didamao.bannersrc
					this.didamaoFoodList = res.content.main.didamao.foodlists
					this.didamaoBottom = res.content.main.didamao.didamaoBottom*/
				}
		},
		spxqmouseenter(item){
			this.spxqImg = item
		},
		countChange(handlecount){
			this.num=handlecount+(this.num-0)
		}
	},
	watch:{
		num:function(val,oldval){
			if(val<1){
				this.num=1
			}else if(isNaN(val-0)){
				this.num=oldval
			}
		}
	},
	computed:{
		Price:function(){
			return this.price.toFixed(2)
		},
		totalprice:function(){
			return (this.num*this.price).toFixed(2)
		},
		prenum:function(){
			if(this.precheckbox.length){
				return this.precheckbox.length
			}else{
				return 0
			}
			 
		}
	},
	components:{
		LastVisit
	},
	mounted(){
		this.init()
		this.getDetailId()
		this.getDetailInfo()
	}
}
</script>

<style lang="stylus" scoped="scoped">
@import '../../../assets/style/varibles.styl';
.container{
	width: $containerWidth;
	margin: 0 auto;
}
	.detail-top {
		    background: url(http://img1.morefood.com/template/template3/images/home-20-48.png) no-repeat left center;
		    width: 100%;
		    margin-right: auto;
		    margin-left: auto;
		    height: 50px;
	   }
		.bread{
			display: block;
		    height: 45px;
		    margin-left: 20px;
		    line-height: 45px;
		    font-family: Arial, Helvetica, sans-serif;
		    color: #000;
		}
		.el-breadcrumb{
			line-height:45px;
			
		}
			.breadlink{
				font-size:12px;
			}
				.breadlink:hover{
					color: $mainColor;
				}
				
				
				
				
	.detail-content{
		width: 100%;
	}
	.classes{
		font-size: 12px;
		width: 160px;
        border: 5px solid #e1e1e1;
        display: inline-block;
	}
	.classes-title{
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
	.classes-li{
		height: 26px;
		line-height: 26px;
		border-bottom: 1px dotted #e1e1e1;
		text-indent: 2em;
	}
	.classeslink{
		color:  #4b4b4b;
		text-decoration: none;
	}
	.classeslink:hover{
		color:  $mainColor;
	}
	
	.spxq{
		    height: auto;
		    width: 950px;
		    float: right;
		    position: relative;
		    font-size: 12px;
	}
	.spxq-left-01{
		height: 400px;
		width: 400px;
		margin-right: 10px;
		float: left;
		position: relative;
		margin-bottom: 126px;
	}
	.spxq-img{
		width: 100%;
		height: 100%;
		border: 1px solid #dddddd;
	}
	.spxq-litimgs{
		position: absolute;
		left: 0;
		bottom: -110px;
	}
	.spxq-litimgs-li{
		height: 95px;
		width: 95px;
		border: 1px solid #dddddd;
		float: left;
		margin-right: 3px;
	}
	.litimgs{
		height: 100%;
		width: 100%;
	}
	
	.spxq-middle {
    float: left;
    width: 370px;
    overflow: hidden;
}


 .product-title{
 	border-bottom: 1px solid #e1e1e1;
    font-size: 16px;
    font-weight: bold;
    color: #444;
    padding-left: 10px;
    padding-bottom: 3px;
    font-family: Arial,"微软雅黑";
    padding-top: 2px;
 }
 
 .produce-td{
 	margin-top: 5px;
    font-size: 14px;
    color: #f35017;
    font-weight: bolder;
    padding-left: 10px;
    width: 360px;
    font-family: Arial,"微软雅黑";
 }
     .pro-info{
     	font-size: 12px;
     	color:  #4b4b4b;
	    margin-top: 5px;
	    font-size: 12px;
	    color: #4b4b4b;
	    font-family: Arial, Helvetica, sans-serif;
	    padding-left: 15px;
     }
     .pro-info-li{
     	padding:12px 2px 10px 4px;
     }
     .pro-info-link{
     	color: $mainColor;
     }
     .price{
     	font-size: 16px;
	    font-weight: bold;
	    color: #f00;
     }
     .discounts{
     	background-color: #f7f7f7;
	    height: 30px;
	    line-height: 30px;
	    padding-left: 15px;
	    font-weight: bolder;
	    color: #4b4b4b;
	    font-size: 12px;
     }
         .discounts-info{
         	padding-left: 15px;
		    color: #c00;
		    padding-top: 10px;
		    padding-bottom: 10px;
		}
		.nowNumber{
			width: 40px;
			text-align: center;
			border: 1px solid #e1e1e1;
		}
		.squake{
			border: 1px solid #e1e1e1;
			padding: 0 4px;
			line-height: 18px;
			cursor: pointer;
		}
		.buy{
			    padding-left: 15px;
			    padding-top: 10px;
			    padding-bottom: 10px;
			    width: 100%;
		}
		.hj{
			padding-left: 20px;
			
		}
		.totalprice{
			font-size: 14px;
		    font-weight: bold;
		    color: #c00;
		}
		
		.vip{
			padding-left: 15px;
		    padding-top: 10px;
		    padding-bottom: 10px;
		}
		.integral{
			font-size: 14px;
		    font-weight: bold;
		    color: #c00;
		}
		.but{
			height: 49px;
			padding-top: 10px;
		}
		.buy-but{
			display: block;
			text-align: center;
			text-decoration: none;
			border-radius: 3px;
			width: 160px;
		    height: 38px;
		    font-family: "Hiragino Sans GB","microsoft yahei",sans-serif;
		    font-size: 16px;
		    line-height: 38px;
		    color: #FFF;
		    margin: 0 10px;
		    float: left;
		}
		.addbut{
		    border: 1px solid #F30;
		    background: #F40;
		}
		.imbut{
			border: 1px solid #F30;
		    color: #E5511D;
		    border: 1px solid #F0CAB6;
		    background: #FFE4D0;
		}
			.server{
				border-top: 1px solid #e1e1e1;
			    margin-top: 10px;
			    padding-top: 5px;
			    background: url(http://img1.morefood.com/template/template3/images/icon-10.png) no-repeat;
			    height: 60px;
			}
			.server span {
			    display: inline-block;
			    width: 100px;
			    height: 28px;
			    line-height: 24px;
			    padding-left: 44px;
			    text-align: left;
			    float: left;
			}
			.spxq-right{
				float: right;
			    width: 145px;
			    background: #f7f7f7;
			    border: 1px solid #e1e1e1;
			}
			.sr-list{
				width: 125px;
			    margin-right: auto;
			    margin-left: auto;
			    margin-top: 15px;
			}
			.sr-li{
				margin-bottom:10px;
			}
			.lastvisit{
				float: left;
			}
			
			.preference{
				font-size: 12px;
				margin-top: 10px;
				border: 1px solid #e1e1e1;
				width: 938px;
				float: right;
				margin-left: 17px;
			}
			
			.preference-title{
				font-size: 18px;
				padding: 8px 0;
				padding-left: 6px;
				color: #444444;
				font-weight: 550;
				border-bottom:3px solid #7dc523; 
			}
			
			.preference-content{
				background-color: #f7f7f7;
				height: 235px;
			}
			
			.preference-middle{
				width: 50px;
			    font-size: 50px;
			    text-align: center;
			    height: 200px;
			    line-height: 200px;
			    float: left;
			    overflow: hidden;
			    color: #666666;
			}
			    
			.preference-left{
				background-color: #fff;
				width: 150px;
				text-align: center;
				line-height: 1.3em;
				margin-left: 12px;
				margin-top: 12px;
				float: left;
			}
			
			.preference-img{
				width: 130px;
                height: 130px; 
                border:1px solid #e1e1e1;
			}
			
			
			.preference-link{
				display: block;
				color: #4b4b4b;
				font-size: 12px;
                text-decoration: none;
                padding: 10px 0;
			}
			.preference-link:hover{
				color: $mainColor;
			}
			
			.thisfood{
				color: #fb7c00; 
				font-weight: bold;
			}
			.preference p{
				text-align: left;
				padding-left: 15px;
				line-height: 19px;
				
			}
			
			.preference-li{
				width: 150px;
				text-align: center;
				margin-top: 22px;
				margin-left: 12px;
				float: left;
			}
			
			.preference-right{
				height: 100%;
				margin-left: 10px;
				float: left;
			}
			
			.preference-bottom{
				height: 45px;
				width: 100%;
				background-color: #e1e1e1;
				position: relative;
			}
			
			.preference-but{
				display: block;
				background-color: #ff4400;
				font-size: 14px;
				color: #fff;
				border-radius: 4px;
				text-align: center;
				text-decoration: none;
				font-weight: bold;
				width: 110px;
				height: 28px;
				line-height: 28px;
				float: left;
				margin-left: 10px;
			}
			.addbutpref{
				position: absolute;
				right: 150px;
				top: 9px;
				color: #fff;
			}
			.imbutpref{
				position: absolute;
				right: 18px;
				top: 9px;
				color: #ff2a00;
				background-color: #ffc8a0;
			}
			.select{
				position: absolute;
				right: 400px;
				top: 16px;
			}
			.zh{
				position: absolute;
				right: 306px;
				top: 16px;
			}
			.prenum{
				color: #fd0046;
			}
			.comra{
				color: #CC0000;
				font-weight: bold;
			}
			.tx{
				width: 940px;
				height: 165px;
				float: right;
				display: inline-block;
				margin-left: 17px;
				margin-top: 20px;
			}
			.tx img{
				height: 100%;
				width: 100%;
				
			}
			.cpxq{
				float: left;
				margin-left: 200px;
				margin-top: 50px;
			}
			.cpxq-img{
				max-width: 800px;
			}
			.edu{
				width: 920px;
				float: left;
				margin: 20px 0;
				margin-left: 200px;
				border: 1px solid #e1e1e1;
				font-size: 14px;
				font-weight: bold;
			}
			.edu a:hover{
				color: $mainColor;
			}
			.edu-nav{
				display: flex;
				flex-wrap: nowrap;
			}
			.edu-li{
				flex: 1;
				height: 38px;
				line-height: 40px;
				text-align: center;
				border-right: 1px solid #e1e1e1;
				border-bottom: 4px solid $mainColor;
				background-color: #f7f7f7;
			}
			.edu-li:hover{
				background-color: #fff;
			}
			.edu-li:last-child{
				border-right: none;
			}
			.edu-link{
				color: #4b4b4b;
                text-decoration: none;
				display: block;
				height: 100%;
				width: 100%;
			}
			
			.edu-content{
				
			}
			.edu-content-top{
				min-height: 100px;
				border-bottom: 1px dotted #e1e1e1;
			}
			.sr1,.sr2{
				display: inline-block;
				margin-top: 10px;
				margin-left: 10px;
				text-align: center;
			}
			.sr2{
				background-color: $mainColor;
				padding: 10px;
				border-radius: 5px;
			}
			.sr2-link{
				font-size: 14px;
				color: #fff;
				text-decoration: none;
			}
			.edu .sr2-link:hover{
				color: #fff;
			}
</style>