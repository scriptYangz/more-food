<template>
	<div>
		<div class="container">
			<div class="logobar">
				<img class="logobar-img" :src="logosrc" />
			</div>
			<div class="search-box">
				<input :placeholder="placeholder" class="search-box-input" type="text" name="" id="" value="" />
				<button class="search-box-but"><span>搜索</span></button>
			</div>
				<ul class="search-bottom">
					<li  v-for="item in searchlink" class="search-bottom-li"><router-link class='search-link' to='/'>{{item}}</router-link></li>
				</ul>
			<div class="saomabar">
				<img class="saomabar-img" :src="saomasrc" />
			</div>
		</div>
		<div class="nav">
			<div class="nav-container">
				<div class="nav-left">
				   全部商品分类
				<img class="nav-left-img" src="http://img1.morefood.com/template/template3/images/nav-x-leftico.png"/>
			</div>
			<ul class="nav-bar">
				<li class="nav-bar-li" v-for='item in nav'> <router-link class='link' to='/'>{{item}}</router-link></li>
			</ul>
			<div class="cart-box">
				<span class="cart-box-icon"><img class="cart-box-img" src="../../assets/img/icon_cart.png"/></span>
				购物车{{num}}件
			</div>
			</div>
			
		</div>
	</div>

</template>

<script>
	import {mapState} from 'vuex'
	import logosrc from "../../assets/img/logo.gif"
	import saomasrc from "../../assets/img/saoma.jpg"
	export default {
		name: "Nav",
		data() {
			return {
				logosrc,
				saomasrc,
				nav:[],
				num:0,
				searchlink:[],
				placeholder:''
			}
		},
		computed:{
			...mapState({
				head:"head"
			})
		},
		watch:{
				head:function(){
				    this.$nextTick(function(){
						this.searchlink = this.head.search.searchBottom.content
						this.placeholder = this.head.search.placeholder
						this.nav = this.head.search.nav
					})
				}
		},
		methods:{
			getNavInfo(){
				
			}
		},
		mounted(){
			
			
		}
	}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/varibles.styl"
	.container {
		width: $containerWidth;
		margin: 0 auto;
		height: 1.7rem;
		position: relative;
	}
	
		.logobar{
			width: 4.6rem;
			height: 1.2rem;
			padding: 12px 120px 8px 0px; 
			float: left;
		}
		.search-box{
			width: 430px;
			height: 32px;
			margin: 0 auto;
			padding-top: 20px;
			position: relative;
		}
			.search-box-input{
				width: 363px;
				height: 30px;
				line-height: 32px;
				border-radius: 2px;
				border: $mainColor 2px solid;
				position: absolute;
				left: 0;
			}
			.search-box-input:focus{
				outline: none;
			}
			.search-box-but{
				height: 36px;
				width: 70px;
				background-color: $mainColor;
				border: $mainColor 1px solid;
				position: absolute;
				right: 0;
				color: #fff;
			}
			.search-box-input::-webkit-input-placeholder{ /*WebKit browsers*/
				padding-left: 4px;
            }
            .search-box-input::-moz-input-placeholder{ /*Mozilla Firefox*/
                padding-left: 4px;
            }
            .search-box-input::-ms-input-placeholder{ /*Internet Explorer*/ 
            	padding-left: 4px;
            	}
		.saomabar{
			width: 2.6rem;
			height: 1.24rem;
			position: absolute;
			top: .24rem;
			right: 0;
		}
			.logobar-img{
				width: 100%;
			    height: 100%;
			}
		.search-bottom{
			float: left;
			font-size: 8px;
		}
		   .search-bottom-li{
		   	   padding: 10px;
		   	   padding-left: 0;
		   	   float: left;  
		   }
		   .search-bottom-li:first-child .search-link{
		   	   color: $mainColor!important;
		   }
		   .search-link{
		   	   text-decoration: none;
		   	   color: #999999;
		   }
		   .search-link:hover{
		   	   color: $mainColor;
		   }
		   .search-bottom-li:nth-child(odd) .search-link{
		   	   color: red;
		   }
 	.nav{
		width: 100%;
		height: 36px;
		padding-top: 6px;
		border-bottom: #68bb00 2px solid; 
	}
		.nav-container{
			width: $containerWidth;
			height: 100%;
			margin: 0 auto;
			line-height: 36px;
		}
			.nav-left{
				width: 165px;
				height: 100%;

				background-color: $mainColor;
				font-size: 16px;
				font-weight: bold;
				color: #fff;
				text-indent: 1em;
				position: relative;
				float: left;
			}
				.nav-left-img{
					width: 12px;
					height: 10px;
					position: absolute;
					right: 10px;
					top: 13px;
				}
			.nav-bar-li{
				width: 80px;
				height: 36px;
				float: left;
				font-size: 16px;
				font-weight: bold;
				text-align: center;
				padding: 0 10px;
			}
			.nav-bar-li:first-child{
				letter-spacing:12px
			}
				.link{
					text-decoration: none;
					color: #4b4b4b;
				}
				.link:hover{
					color: $mainColor;
				}
		    .cart-box{
		    	width: 132px;
		    	height: 36px;
		    	line-height: 36px;
		    	font-size: 16px;
		    	float: right;
		    	text-indent: 3em;
		    	position: relative;
		    	color: red;
		    	font-weight:bold ;
		    	cursor: pointer;
		    }
		    .cart-box:hover{
		    	border:solid 2px $mainColor;
		    	border-radius:1px 1px 0 0;
		    	border-bottom:none;
		    	background-color: #fff;
		    }
		    	
				    .cart-box-img{
				    	width: 24px;
				    	height: 24px;
				    	position: absolute;
				    	top: 50%;
				    	left: 12px;
				    	transform:translate(-50%,-50%);
				    }
</style>