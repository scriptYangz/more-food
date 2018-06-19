<template>
	<div class="foodbox">
         <p class="imgbox">
         <router-link :to="{name:'Detail',params:{id:this.id}}"><img :src="Img"/></router-link>
         <div v-if="discount.length" class="discount"></div>
         <div v-if="sale" class="sale"></div>
         </p>
         <p class="pricebox">
         	<span class="yen">&yen;</span>
         	<span class="price">{{Price}}</span>
         </p>
         <p class="linkbox">
         	<router-link class="link" :to="{name:'Detail',params:{id:this.id}}">{{title}}</router-link>
         </p>
         <p class="discbox" v-if="discount.length">
         	{{discount}}
         </p>
         <p class="edubox">
         	<router-link class="edulink" to="/">
         	<span class="iconfont">&#xe63d;</span>
         	{{edunum}}条评价
         	</router-link>
         </p>
         <p class="sellbut">
         	 <input class="colbut" type="button" name="" id="" value="收藏" />
         	<input v-if="!sellout" class="buy" type="button" name="" id="" value="加入购物车" />
         	<input v-if="sellout" class="sellout" type="button" name="" id="" value="抢光了" />
         </p>
	</div>
</template>

<script>
export default{
	name:"FoodBox",
	props:{
		food:Object
	},
	data(){
		return{
			id:null,
			Img:"",
			price:0.00,
			title:"",
			discount:"",
			edunum:0,
			sellout:false,
			sale:false
		}
	},
	computed:{
		Price:function(){
			return this.price.toFixed(2)
		},
	},
	methods:{
		getFoodList(){
			//判断商品没货
			if(this.food.sellout){
				this.sellout = true
			}
			if(this.food.discount){
				this.discount = this.food.discount
			}
			 this.Img = this.food.img
			 this.price = this.food.price
			 this.title = this.food.title
			 this.edunum = this.food.edunum
			 this.id = this.food.id
		}
	},
	mounted(){
		this.getFoodList()
	}
	
	
}
</script>

<style lang="stylus" scoped="scoped">
@import "../../assets/style/varibles.styl";
.foodbox{
	width: 184px;
	overflow: hidden;
	margin: 10px 0;
	position: relative;
}
.foodbox:hover{
	outline:1px solid #aad07a; 
}
.foodbox a{
	text-decoration: none;
	color: #4B4B4B;
	font-size: 14px;
}
.foodbox a:hover{
	color: $mainColor;
}
.foodbox p:not(.imgbox){
	margin: 10px 0;
	padding-left: 20px;
}
.imgbox{
	position: relative;
	width: 166px;
	height: 166px;
	margin: 10px;
	box-sizing: border-box;
	margin-top: 20px;
}
.imgbox img{
	width: 100%;
	height: 100%;
}
.discount{
	width: 40px;
    height: 36px;
    display: block;
    float: right;
    z-index: 99;
    background: url(http://img1.morefood.com/template/template3/images/icon_sale.png) no-repeat center top;
    position: absolute;
    right: 2px;
    top: 10px;
    background-position: 0 -120px;
}
.sale{
	width: 40px;
    height: 36px;
    display: block;
    float: right;
    z-index: 99;
    background: url(http://img1.morefood.com/template/template3/images/icon_sale.png) no-repeat center top;
    position: absolute;
    right: 2px;
    top: 10px;
    background-position: 0 0px;
}
.pricebox{
	font-size: 20px;
    color: #ff5500;
    font-weight: bold;
    
}
.yen{
	font-size: 16px;
    font-family: '微软雅黑';
}
.discbox{
	overflow: hidden;
    color: #ff5500;
}
    .link{
    	display: block;
    	max-width: 100%;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	
    }
    .iconfont{
    	color: #aeaeae;
    	position: relative;
    	top: 2px;
    }
    .foodbox .edulink{
       font-size:12px
       position: relative;
    }
    .sellbut input{
    	height: 100%;
    	border:1px solid #eeeeee;
    	background-color: #fff;
    	float: left;
    	line-height: 28px;
    	cursor: pointer;
    }
    .sellbut{
    	height: 28px;
    }
    .colbut{
    	padding-left: 22px;
    	background: url(http://img1.morefood.com/template/template3/images/icon_goods.png) no-repeat;
    	background-position: 4px -85px !important;
    }
    .buy{
    	padding-left: 22px;
    	color: #5DA700;
    	background: url(http://img1.morefood.com/template/template3/images/icon_goods.png) no-repeat;
        background-position: 4px -114px !important;
    }
    .sellout{
    	background-color: #e1e1e1!important;
    	font-size: 13px;
	    font-family: "微软雅黑";
	    color: #fff;
	    font-weight: bold;
	    width: 96.66px;
    }
</style>