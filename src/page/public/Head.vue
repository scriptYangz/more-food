<template>
	<div>
		<div class="header">
			<div class="header-contianer">
				<router-link to="/Login">
					<img class="contianer-but login" src="http://img1.morefood.com/template/template3/images/top-login.gif"/>
				</router-link>
				<router-link to="/Register">
					<img class="contianer-but reg" src="http://img1.morefood.com/template/template3/images/top-zc.gif"/>
				</router-link>
				<ul class="contianer-box">
					<li @mouseleave="mouseout" @mouseenter="mouseenter(index)" v-for="(item,index) in boxs" class="contianer-box-child"><span class="contianer-box-icon"></span>{{item}}<span class="iconfont">&#xe63c;</span><span v-if="!showbox[index]" class="line"></span>
						<div v-if="showbox[index]&&(index==0)" class="hidebox">
							<p>工作时间</p>
							<p>周一至周五：9:00~23:30</p>
							<p>周六至周日：9:00~00:00</p>
						</div>
						<div v-if="showbox[index]&&(index==1)" class="hidebox">
							<div class="er-box">
								<div class="block"></div>
								<p>订阅号</p>
							</div>
							<div class="er-box">
								<div class="block"></div>
								<p>服务号</p>
							</div>
						</div>
						<div v-if="showbox[index]&&(index==2)" class="hidebox">
							<p>兑换码 <input class="hidebox-input"/></p>
							<button class="hidebox-but">提交兑换 </button>
						</div>
					</li>
				</ul>	
			</div>
		</div>
	</div>
</template>

<script>
	
export default{
	name:'Head',
	data (){
		return {
			showbox:[false,false,false],
			boxs:["在线客服","关注我们","优惠券激活"]
		}
	},
	methods:{
		mouseenter(index){
			for(var item in this.showbox){
				this.$set(this.showbox,item,false)
			}
			this.$set(this.showbox,index,true)
		},
		mouseout(){
			for(var item in this.showbox){
				this.$set(this.showbox,item,false)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/varibles.styl";
	.header{
		height: .74rem;
		width: 100%;
		background-color: #fafafa;
		border-bottom:1px solid #dddddd;
	}
	  .header-contianer{
	  	height: 100%;
		width: $containerWidth;
		margin: 0 auto;
		line-height: .74rem;
		position: relative;
	  }
			     .contianer-but{
			     	width: 1.24rem;
			     	height: .56rem;
			     	position: absolute;
			     	top: 50%;
			     	transform:translate(-50%,-50%);
			     } 
			     .login{
			     	left: 0.62rem;
			     }
			     .reg{
			     	left: 1.96rem;
			     }
		 .contianer-box{
		 	float: right;
		 }
		   .contianer-box-child{
		   	  float: left;
		   	  padding: 0 .6rem;
		   	  height: .76rem;
		 	  position: relative;
		 	  line-height: .76rem;
		 	  font-size: .16rem;
		 	  text-align: center;
		 	  cursor: pointer;
		   }
		   .contianer-box-child:hover{
		   	  background-color: #fff;
		   	  border-left:1px solid  $headIconColor;
		   	  border-right:1px solid  $headIconColor;
		   }
		   
			 	 .contianer-box-icon{
			 		width: .4rem;
			 		height: .4rem;
			 		position: absolute;
			 		left: .28rem;
			 		top: 50%;
			     	transform:translate(-50%,-50%);
			 	 }
		         .contianer-box-child:nth-child(1) .contianer-box-icon{
			 	 	background-image: url(../../assets/img/online_new.png);
			 	 	background-repeat: no-repeat;
			 	 	background-position: 0 0;
			 	 	}
		         .contianer-box-child:nth-child(2) .contianer-box-icon{
			 	 	background-image: url(../../assets/img/online_new.png);
			 	 	background-repeat: no-repeat;
			 	 	background-position: 0 -2.66rem;
			 	 	}
		         .contianer-box-child:nth-child(3) .contianer-box-icon{
			 	 	background-image: url(../../assets/img/online_new.png);
			 	 	background-repeat: no-repeat;
			 	 	background-position: 0 -4.84rem;
			 	 	}
			 	 .iconfont{
			 	 	position: absolute;
			 		right: 0;
			 		top: 52%;
			     	transform:translate(-50%,-50%);
			     	color: $headIconColor;
			     	
			 	 }
			 	 .line{
			 	 	width: 1px;
			 	 	height: .32rem;
			 	 	position: absolute;
			 	 	right: -1px;
			 	 	top: 48%;
			     	transform:translate(-50%,-50%);
			     	background-color: $headIconColor;
			 	 }
			 	 .hidebox{
			 	 	width: 150%;
			 	 	position: absolute;
			 	 	left: -1px;
			 	    border: 1px solid $headIconColor;
			 	    border-top:none ;
			 	    padding: 0 .2rem;
			 	    background-color: #fff;
			 	    z-index: 99;
			 	 }
			 	    .er-box{
			 	    	 padding-top: 1rem;
			   	   	     width: 2rem;
			     	   	 margin: 0 auto;
			 	    }
				 	     .block{
				 	     	width: 1.8rem;
				 	     	height: 1.8rem;
				 	     	margin:0 auto;
				 	     }
			 	   .er-box:nth-child(1) .block{
			 	   	background-image: url(../../assets/img/Qrcode.png);
			 	   	background-repeat: no-repeat;
			 	   	background-position: 0 0;
			 	   }
			 	   .er-box:nth-child(2) .block{
			 	   	background-image: url(../../assets/img/Qrcode.png);
			 	   	background-repeat: no-repeat;
			 	   	background-position: 0 -2rem;
			 	   }
			 	   .hidebox-input{
			 	  	width: 1.96rem;
			 	  	height: .48rem;
			 	   }
			 	   .hidebox-but{
			 	   	width: 2.9rem;
			 	   	height: .52rem;
			 	   	background-color: #ccc;
			 	   	border: none;
			 	   	border-radius: .1rem;
			 	   	color: #fff;
			 	   	cursor: pointer;
			 	   }
			 	   .hidebox-but:hover{
			 	   	background-color: #68bb00;
			 	   }
			 	
		
</style>