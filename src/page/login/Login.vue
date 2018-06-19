<template>
	<div>
	    <div class="login-top">
		   	<div class="top-container">
		   		<router-link class="logo" to="/"><img :src="logoImg"/></router-link>
		   		<h4 class="title">欢迎登录</h4>
		   	</div>
		</div>
		<div class="login">
			<div class="login-box">
				<p class="login-title"><span class="mc">猫诚会员</span><router-link class="mc-link" to="/Register">免费注册</router-link></p>
				<form class="loginform" action="/" method="post">
					<p class="lg-box-01"><span class="loginlabel"></span><input class="username" type="text" placeholder="手机号/用户名/邮箱" name="" id="" value="" /></p>
					<p class="lg-box-01"><span class="pwdlabel"></span><input class="password" type="password" placeholder="密码"/></p>
					<p><span><input class="cb" type="checkbox"/>自动登录</span><router-link to="/" class="fw">忘记密码？</router-link></p>
					<p><button class="loginbut">立即登录</button></p>
				</form>
				<div class="bottom">
					<p class="bottom-top">使用合作网站账号登录猫诚食品：</p>
					<div class="loginbtn"><span class="il_txt">QQ</span><span class="icolog il_qq"></span></div>
					<div class="loginbtn"><span class="il_txt">微信</span><span class="icolog il_wx"></span></div>
					<div class="loginbtn"><span class="il_txt">新浪</span><span class="icolog il_wb"></span></div>
					<div class="loginbtn"><span class="il_txt">支付宝</span><span class="icolog il_zfb"></span></div>
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../public/Foot'
	import logoImg from '../../assets/img/logo.gif'
export default{
	name:"Login",
	data(){
		return{
			logoImg:logoImg
		}
	},
	components:{
		Foot
	}
}
</script>

<style lang="stylus" scoped="scoped">
@import "../../assets/style/varibles.styl";
.login-top{
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
.login{
	width: $containerWidth;
	margin: 100px auto;
    min-height: 500px;
    background-image:url(http://img1.morefood.com/template/template3/images/loginbg0223.jpg);
    font-size: 12px;
}
.login a:hover{
	color: $mainColor;
}
.login-box{
	float: right;
	margin-top: 100px;
	margin-right: 80px;
	box-shadow: 0px 1px 5px #888;
	width: 360px;
}

.loginlabel{
	width: 38px;
    height: 100%;
    border: 1px solid #bbb;
    border-right: none;
    background: url(http://img1.morefood.com/template/template3/images/emailpic.png) no-repeat center;
    overflow: hidden;
    float: left;
    text-align: right;
}
.pwdlabel{
	width: 38px;
    height: 100%;
    border: 1px solid #bbb;
    border-right: none;
    background: url(http://img1.morefood.com/template/template3/images/passwordpic.png) no-repeat center;
    overflow: hidden;
    float: left;
    text-align: right;
}

.login-title{
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
.loginform{
	padding:0 38px;
	padding-top:66px;
}
.loginform p{
	width: 100%;
	height: 40px;
	margin-bottom: 4px;
	line-height: 40px;
}
.username{
	width: 232px;
	display: block;
	float: left;
	height: 38px!important;
    border: 1px solid #bbb;
    border-left: 1px solid #b6b6b6;
    padding-left: 8px;
}
.password{
	width: 232px;
	height: 38px!important;
    border: 1px solid #bbb;
    border-left: 1px solid #b6b6b6;
    padding-left: 8px;
    background-color: #fff;
}
.cb{
	margin: 0;
	margin-right: 6px;
	position: relative;
	top: 2px;
}
.fw{
	text-decoration: none;
	color: #000;
	float: right;
}
.loginbut{
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
.bottom{
	padding:50px 24px;
}
.bottom-top{
	padding-bottom: 10px;
    font-family: '宋体';
    color: #888;
}
.loginbtn{
	display: inline-block;
	cursor: pointer;
}
.loginbtn:hover{
	color: $mainColor;
	
}
.il_txt {
    float: right;
    display: inline-block;
    text-align: left;
    color: #666;
    font-family: Arial,"宋体";
    line-height: 34px;
    padding: 0px 10px 0px 38px;
}
.il_txt:hover {
   color: $mainColor;
}
.icolog {
    width: 34px;
    height: 34px;
    line-height: 40px;
    background: url(../../assets/img/icon_login.png) no-repeat left;
    display: block;
    margin-right: 6px;
    border-radius: 17px;
}
.il_qq {
    background-color: #05a4e0;
    background-position: 1px 3px;
}
.il_wx {
    background-color: #23c416;
    background-position: 1px -31px;
}
.il_wb {
    background-color: #f5273b;
    background-position: 1px -65px;
}
.il_zfb {
    background-color: #00aaee;
    background-position: 1px -100px;
}
</style>