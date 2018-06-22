<template>
	<div >
		<div class="mycart-top">
			<div class="container">
		<img class="logo" :src="logo"/>
		<div class="step"></div>
	</div>
		</div>
		
		<div class="mycart-main container">
		<div class="title">
			我的购物车
		</div>
		<div class="table">
			<div class="tabletitle">
				<ul class="titlelist">
          <li class="sr1">
          	&nbsp;&nbsp;商品名称
          	
          </li>
          <li class="sr2">商品单价</li>
          <li class="sr3">购买数量</li>
          <li class="sr4">金额小计</li>
          <li class="sr5">会员优惠</li>
          <li class="sr6">积分</li>
          <li class="sr7">库存</li>
          <li class="sr8">操作</li>
        </ul>
			</div>
			<div class="tablecontent">
				<ul class="contentlist">
          <li class="sr1">
          	<img class="foodimg" src="http://img1.morefood.com/files/images2016/180-180/list-12709-27926-180-180.jpg"/>
          	<div class="foodtitle">小林煎饼 吉祥煎饼115g/盒</div>
          </li>
          <li class="sr2">10.00</li>
          <li class="sr3">
          	<span class="span">
          		<a href="javascript:voids()" onclick="goods_num_jian(15295588660089,12709)" class="goodsbutton">-</a>
          	</span>
          	<span>
          		<input type="text" class="nums"/>
          	</span>
          	<span class="span">
          		<a href="javascript:voids()" onclick="goods_num_add(15295588660089,12709)" class="goodsbutton">+</a>
          	</span>
          </li>
          </li>
          <li class="sr4">
          	10.00
          </li>
          <li class="sr5">10.00</li>
          <li class="sr6">10</li>
          <li class="sr7">有货</li>
          <li class="sr8">
          	<span class="del">删除 </span>
          	<span class="col">移入收藏夹</span>
          </li>
        </ul>
				<ul class="contentlist">
          <li class="sr1">
          	<img class="foodimg" src="http://img1.morefood.com/files/images2016/180-180/list-12709-27926-180-180.jpg"/>
          	<div class="foodtitle">小林煎饼 吉祥煎饼115g/盒</div>
          </li>
          <li class="sr2">10.00</li>
          <li class="sr3">
          	<span class="span">
          		<a href="javascript:voids()" onclick="goods_num_jian(15295588660089,12709)" class="goodsbutton">-</a>
          	</span>
          	<span>
          		<input type="text" class="nums"/>
          	</span>
          	<span class="span">
          		<a href="javascript:voids()" onclick="goods_num_add(15295588660089,12709)" class="goodsbutton">+</a>
          	</span>
          </li>
          </li>
          <li class="sr4">
          	10.00
          </li>
          <li class="sr5">10.00</li>
          <li class="sr6">10</li>
          <li class="sr7">有货</li>
          <li class="sr8">
          	<span class="del">删除 </span>
          	<span class="col">移入收藏夹</span>
          </li>
        </ul>
			</div>
			
			<div class="tablebottom">
				<p class="wnumber">商品重量：<span class="colorofbot">0.600</span>KG 件数：<span class="colorofbot">2</span>件 </p>
				<p class="totalprice">货物总额：<span class="colorofbot">￥24.90</span></p>
			</div>
		</div>
	</div>
	</div>
	
</template>

<script>
import logo from "../../../assets/img/logo.gif"
	export default{
		name:"MyCart",
		data(){
			return{
				logo:logo
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../../../assets/style/varibles.styl';
.container{
	width: $containerWidth;
	margin: 0 auto;
	position: relative;
	font-size: 12px;
}
.mycart-top{
	height: 85px;
	border-bottom:1px solid #ddd;
}
.logo{
	position: absolute;
	bottom: 4px;
}
.mycart-top>.container{
	height: 100%;
}
.step{
	display: block;
    float: right;
    height: 80px;
    width: 750px;
    margin-right: auto;
    margin-left: auto;
    background: url(http://img1.morefood.com/template/template3/images/order-01.png) no-repeat center center;
    position: relative;
    top: 16px;
}
.title{
    height: 36px;
    line-height: 44px;
    font-family: '微软雅黑';
    font-weight: bold;
    font-size: 24px;
    color: #68bb00;
    text-align: left;
    margin: 0px;
    padding: 5px 5px 5px 0px;
    display: block;
}
.tabletitle{
	background-color: #f7f7f7;
	height: 35px;
	line-height: 35px;
	border-bottom: 1px solid #E1E1E1;
    border-top: 1px solid #E1E1E1;
   
}
.titlelist{
	width: 100%;
	 padding-bottom: 37px;
}
.table li{
	float: left;
}
.sr1 {
    width: 30%;
}
.sr2 {
    width: 10%;
}
.sr3 {
    width: 15%;
}
.sr4 {
    width: 10%;
}
.sr5 {
    width: 10%;
}
.sr6 {
    width: 8%;
}
 .sr7 {
    width: 7%;
}
.sr8 {
    width: 10%;
    }
    .contentlist{
    height: 105px;	
    }
    .contentlist li{
    	height: 85px;
    	line-height: 85px;
    	color: #4B4B4B;
    	padding: 10px 0;
    border-bottom: 1px solid #E1E1E1;
    }
    .foodimg{
    	height: 80px;
    	width: 80px;
    	margin-top: auto;
    	margin-bottom: auto;
    	vertical-align: middle;
    	float: left;
    }
    .foodtitle{
    	float: left;
    	margin-left: 4px;
    	
    }
    .span {
    padding: 2px 5px;
    border: 1px solid #E1E1E1;
    margin: 0 5px 0 5px;
}
.goodsbutton {
    padding: 0;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: #4B4B4B;
}
.nums {
    width: 30px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    }
    .sr8 span{ 
    	cursor: pointer;
    }
    .sr8 span:hover{
    	color: $mainColor;
    }
    .tablebottom{
    	margin-top: 20px;
    	padding: 10px 0;
    	background-color: #f7f7f7;
    	text-align: right;
    }
    .tablebottom p{
    	padding: 5px 0;
    	padding-right: 20px;
    }
    .colorofbot{
    	color: #c00;
        font-style: normal;
    }
    .totalprice .colorofbot{
    	font-size: 14px;
        font-weight: bold;
    }
    .table{
    	border-bottom: 1px solid #E1E1E1;
    }
</style>