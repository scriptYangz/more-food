<template>
	<div>
	    <div class="register-top">
		   	<div class="top-container">
		   		<router-link class="logo" to="/"><img :src="logoImg"/></router-link>
		   		<h4 class="title">欢迎来到猫诚</h4>
		   		<span class="lgmsg">已有账号，<router-link class="loginbtn" to="/Login">直接登录</router-link></span>
		   	</div>
		</div>
		<div class="register">
			<div class="register-box">
				<p class="register-title"><ul class="tabbox">
					<li class="tab" :class="{'sjac':regTab==false}" @click="tab(0)"><span class="icon sjzc"></span>手机注册</li>
					<li class="tab" :class="{'yxac':regTab}" @click="tab(1)"><span class="icon yxzc"></span>邮箱注册</li>
				</ul></p>
				<form v-if="regTab==false" class="registerform" action="/" method="post">
					<p class="lg-box-01"><input class="inputbox username" type="text" placeholder="手机号" name=""  value="" /></p>
					<p class="lg-box-01 short"><input class="verification " type="text" placeholder="图片验证码" name="" value="" /><span class="code"><img src="http://www.morefood.com/admin/imgcode?0.2813241828607942"/></span></p>
					<p class="lg-box-01 short"><input class="verification " type="text" placeholder="短信验证码" name="" value="" /><span class="getcode">获取验证码</span></p>
					<p class="lg-box-01"><input class="inputbox password" type="password" placeholder="设置密码"/></p>
					<p class="lg-box-01"><input class="inputbox confirm-password" type="password" placeholder="确认密码"/></p>
					<p>点击注册，表示您同意<router-link to="/" class="xy">《猫诚食品用户协议》</router-link></p>
					<p><button class="resgisterbtn">立即注册</button></p>
				</form>
				<form v-if="regTab==true" class="registerform" action="/" method="post">
					<p class="lg-box-01"><input class="inputbox username" type="text" placeholder="请输入您的邮箱" name=""  value="" /></p>
					<p class="lg-box-01"><input class="inputbox password" type="password" placeholder="设置密码"/></p>
					<p class="lg-box-01"><input class="inputbox confirm-password" type="password" placeholder="确认密码"/></p>
					<p>点击注册，表示您同意<router-link to="/" class="xy">《猫诚食品用户协议》</router-link></p>
					<p><button class="resgisterbtn">立即注册</button></p>
				</form>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../public/Foot'
	import logoImg from '../../assets/img/logo.gif'
export default{
	name:"Register",
	data(){
		return{
			logoImg:logoImg,
			regTab:false
		}
	},
	methods:{
		tab(index){
			if(index===0){
				this.regTab = false
			}else if(index===1){
				this.regTab = true
			}
		}
	},
	components:{
		Foot
	}
}
</script>

<style lang="stylus" scoped="scoped">
@import "../../assets/style/varibles.styl";
.register-top{
	margin-top: 36px;
	height: 60px;
	line-height: 60px;
}
.top-container{
	height: 100%;
	width: $containerWidth;
	margin: 0 auto;
}
.logo{
	float: left;
}
.title{
	display: inline-block;
    padding: 0 16px;
    height: 60px;
    line-height: 70px;
    float: left;
    font-family: "微软雅黑";
    font-size: 22px;
    color: #666;
    letter-spacing: 1px;
    font-weight: bold;
}
.register{
	width: $containerWidth;
	margin: 100px auto;
    min-height: 500px;
    background-image:url(http://img1.morefood.com/template/template3/images/loginbg0223.jpg);
    font-size: 12px;
}
.register a:hover{
	color: $mainColor;
}
.register-box{
	float: right;
	margin-top: 26px;
	margin-right: 80px;
	box-shadow: 0px 1px 5px #888;
	width: 360px;
}


.register-title{
	padding:20px 0;
	width: 100%;
    font-size: 18px;
    color: #666;
    float: left;
    display: inline-block;
}
.mc{
	margin-left: 20px;
}
.mc-link{
	float: right;
	color: #68BB00;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    padding-right: 20px;
    position: relative;
    top: 6px;
}
.registerform{
	padding:0 40px;
	padding-top:77px;
	padding-bottom: 66px;
}
.registerform p{
	width: 100%;
	height: 40px;
	margin-bottom: 8px;
	line-height: 40px;
}
.inputbox{
	width: 100%;
	display: block;
	float: left;
	height: 38px!important;
	border: 1px solid #bbb;
	padding-left: 8px;
}
.lgmsg{
	font-size: 14px;
	position: relative;
	top: -6px;
}
.loginbtn{
	text-decoration: none;
	color: $mainColor;
}

.verification{
	height: 38px;
	padding-left: 8px;
	float: left;
	width: 162px;
	margin-right: 4px;
}

.resgisterbtn{
	background-color: $mainColor;
	width: 100%;
	height: 100%;
	    cursor: pointer;
    display: block;
    border-radius: 2px;
    padding-bottom: 3px;
    font-family: "微软雅黑";
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    letter-spacing: 2px;
    border: none;
}
.xy{
	text-decoration: none;
    color: #333;
}
.tabbox{
	margin: 0 auto;
	display: flex;
}
.tab{
	float: left;
	flex: 1;
	text-align: center;
	padding-bottom: 4px;
	border-bottom:1px solid #e5e5e5;
	font-size: 16px;
	cursor: pointer;
}
.tab:last-child{
	border-left:1px solid #e5e5e5;
}
.icon{
	width: 20px;
    height: 20px;
    display: inline-block;
    float: left;
    position: relative;
    right:-36px ;
}
.sjzc {
    background: url(../../assets/img/icon_sjyx.png) no-repeat 0px -5px;
}
.yxzc {
    background: url(../../assets/img/icon_sjyx.png) no-repeat -30px -5px;
}
.sjac{
	font-weight: bold;
	color: #000;
	border-bottom:1px solid $mainColor;
}
.yxac{
	font-weight: bold;
	color: #000;
	border-bottom:1px solid $mainColor;
}

.sjac .sjzc {
    background: url(../../assets/img/icon_sjyx.png) no-repeat 0px -51px;
}
.yxac .yxzc{
	 background: url(../../assets/img/icon_sjyx.png) no-repeat -30px -51px;
}
.code,.getcode{
	display: inline-block;
	float: left;
	height:42px;
	width: 98px;
	border: 1px solid #b6b6b6;
	position: relative;
	left: 12px;
}
.code img{
	width: 100%;
	height: 100%;
}
.getcode{
	background: #eee;
	text-align: center;
	cursor: pointer;
}
.getcode:hover{
	outline:1px solid #a6c8ff;
}
</style>