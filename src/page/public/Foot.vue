<template>
	<div class="foot">
		<div class="foot-top">
			<ul v-for="(item,index) in aboutus" class="about-us">
				<li class="about-li"><pre class="about-pre">{{item.pre}}</pre></li>
				<li v-for="link in item.link" class="about-li"><router-link class='foot-top-link' to='/'>{{link}}</router-link></li>
			</ul>
		</div>
		<div class="foot-middle">
			<ul>
				<li class="foot-middle-li">
					<div class="foot-middle-li-top"></div>
					<div class="foot-middle-li-top-bottom">
						<span class="footlvs">全国5+1</span>
						满80包邮
					</div>
				</li>
				<li class="foot-middle-li">
					<div class="foot-middle-li-top"></div>
					<div class="foot-middle-li-top-bottom">
						<span class="footlvs">最高4倍积分</span>
						下单抵货款
					</div>
				</li>
				<li class="foot-middle-li">
					<div class="foot-middle-li-top"></div>
					<div class="foot-middle-li-top-bottom">
						<span class="footlvs">品质保障</span>
						7天无理由退换货
					</div>
				</li>
			</ul>
		</div>
		<div class="foot-bottom">
			<p><router-link class='foot-bottom-link' to='/'>首   页 </router-link>|<router-link class='foot-bottom-link' to='/'> 联系我们 </router-link>|<router-link class='foot-bottom-link' to='/'> 加入猫诚食品 </router-link>|<router-link class='foot-bottom-link' to='/'> 手机猫诚食品</router-link></p>
			<p>Copyright © 2009-2018 morefood.com，All Rights Reserved 上海猫诚电子商务股份有限公司 版权所有 沪ICP备09068257号-7</p>
			<p>食品流通许可证编号：JY13101130035157 酒类许可证：1406030114003051 营业执照</p>
			<p>
				<img src="http://img1.morefood.com/template/template3/images/biaoshi1125.gif"/>
				<img src="http://img1.morefood.com/template/template3/images/logo123x40.jpg"/>
				<img src="http://img1.morefood.com/template/template3/images/icon.gif"/>
				<img src="http://img1.morefood.com/template/template3/images/picp_bg.png"/>
			</p>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'Foot',
		data(){
			return{
				aboutus:[]
			}
		},
		computed:{
			...mapState({
				foot:"foot"
			})
		},
		watch:{
			foot:function(){
				this.$nextTick(function(){
						this.aboutus = this.foot.aboutus
				})
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
@import '../../assets/style/varibles.styl';
.foot{
	width: $containerWidth;
	margin:0 auto;
	margin-top: 20px;
}
.foot-top{
	width: 100%;
	height: 130px;
	border-top: 1px solid #e1e1e1;
	padding: 4px 0;
}
.about-us{
	float: left;
	padding-right: 50px;
}
      .about-li{
      	    text-align: left;
		    display: block;
		    margin-top: 5px;
		    margin-bottom: 5px;
		    margin-left: 60px;
		    list-style: none;
		    font-size: 12px;
		     padding: 4px 0;
      }
      .about-pre{
      	list-style: none;
    font-size: 14px;
    font-weight: bolder;
    font-family: "微软雅黑";
    color: #333;
      }
      
      .foot-top-link{
      	    text-decoration: none;
      	    color: #4b4b4b;
      	    
      }
      .foot-top-link:hover{
      	    color: $mainColor;
      }
      
      .foot-middle{
      	height: 118px;
      	width:100% ;
      	text-align: center;
      	border-top: 1px solid #e1e1e1;
      	background: #f9f9f9;
      }
	  .foot-middle-li{
	  	float: left;
	  	font-size: 18px;
	  	padding-left: 100px;
	  	padding-top: 16px;
	  }
	  .foot-middle-li .foot-middle-li-top{
	  	width: 100%;
	  	height: 68px;
	  	  background-repeat: no-repeat;
	      background-image: url(http://img1.morefood.com/template/template3/images/footicon.png);
	  }
	  .foot-middle-li:first-child .foot-middle-li-top{
	      background-position: 95px -72px;
	     
	  }
	  .foot-middle-li:nth-child(2) .foot-middle-li-top{
	      background-position: 95px -153px;
	      
	  }
	  .foot-middle-li:nth-child(3) .foot-middle-li-top{
	      background-position: 95px -238px;
	  }
	  .foot-middle-li-top-bottom{
	  	display: block;
	    float: left;
	    height: 28px;
	    line-height: 24px;
	    width: 260px;
	    font-family: Arial,"微软雅黑";
	    font-size: 16px;
	    text-align: center;
	    color: #666;
	    font-weight: bold;
	  }
	  .footlvs{
	  	color: $mainColor;
	  }
	  
	  .foot-bottom{
	  	font-size: 12px;
	  	margin-top: 6px;
	  	margin-bottom: 10px;
	  	height: 120px;
	  	text-align: center;
	  }
	   .foot-bottom p{
	   	height: 24px;
	   	line-height: 24px;
	   }
	  .foot-bottom-link{
	  	    color: #4b4b4b;
           text-decoration: none;
	  }
	  .foot-bottom-link:hover{
	  	    color: $mainColor;
	  }
</style>