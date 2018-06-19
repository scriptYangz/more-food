<template>
	<div class="Inimport">
		<div class="container">
			<div class="import-top">
		    	<p class="bread">
		    		<el-breadcrumb separator="/">
					  <el-breadcrumb-item v-if="classes" v-for="cla in classes" :to="{ path: './' }"><router-link class="breadlink" to="/">{{cla}}</router-link></el-breadcrumb-item>
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
		    			<li class="classes-li" v-for="item in conutries"><router-link class="classeslink" to="/">{{item}}</router-link></li>
		    		</ul>
		    	</div>
		    	<LastVisit></LastVisit>
		    	</div>
		    	
		    	
		    	
		    	<div class="middle">
		    		<el-carousel height='420px'>
			<el-carousel-item v-for="item in bannersrc" :key="item">
				<router-link to="/"><img class="banner-img" :src="item" /></router-link>
			</el-carousel-item>
		</el-carousel>
		    	</div>
		    	
		    	
		    	
		    	
		    	
		    	
		    	<div class="right">
		    		<ul class="rightbox">
		    			<li class="rightboxlist">
		    			   <router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/911748001412064079.jpg"/></router-link>
		    			   <p><router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link></p>
		    			</li>
		    			<li class="rightboxlist">
		    			   <router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/911748001412064079.jpg"/></router-link>
		    			   <p><router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link></p>
		    			</li>
		    			<li class="rightboxlist">
		    			   <router-link to="/"><img class="rightboxImg" src="http://img1.morefood.com/files/ads_new/911748001412064079.jpg"/></router-link>
		    			   <p><router-link to="/Detail">友谊牌 Tipo鸡蛋牛奶味面包干300g/袋 越南进口</router-link></p>
		    			</li>
		    		</ul>
		    	</div>
		    	
		    </div>
		    
		    
		    
		</div>
	</div>
</template>

<script>
	
	import LastVisit from "../../public/LastVisit"
	export default{
		name:"InImport",
		data(){
			return{
				classes:["首页","进口食品"],
				conutries:["泰国","越南","菲律宾","韩国","丹麦","比利时","美国","阿联酋","马来西亚","西班牙","澳大利亚","葡萄牙","日本","加拿大","印尼","阿根廷","法国","英国","意大利","土耳其",
				"奥地利","瑞士","德国","斯里兰卡"]
			}
		},
		components:{
			LastVisit
		}
		
		
	}
</script>

<style lang="stylus" scoped="scoped">
@import '../../../assets/style/varibles.styl';
.container{
	width: $containerWidth;
	margin: 0 auto;
}
.import-top{
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
				
				.import-content{
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
	
	
	
	.left{
		width: 170px;
		float: left;
	}
	
	.right{
		float: left;
		margin-left: 10px;
		width: 170px;
		
	}
	.right a{
		font-size: 12px;
	    color: #4B4B4B;
	    display: block;
	    text-decoration: none;
	    line-height: 1.3em;
	}
	.right a:hover{
		color: $mainColor;
	}
	.rightboxlist{
		margin-bottom: 20px;
	}
</style>