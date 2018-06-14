<template>
	<div class="last_visit_goods">
		<div class="top">
			最近浏览过的商品
		</div>
      <ul v-for="item in items" class="visitbox">
        <li class="img"><router-link to="/" title="有友 泡椒凤爪100g/袋 重庆特产" target="_blank"><img width="130" height="130" src="http://img1.morefood.com/files/images2016/180-180/list-6116-27034-180-180.jpg"></router-link></li>
        <li class="title"><router-link to="/" class="titlelink" title="" target="_blank">有友 泡椒凤爪100g/袋 重庆特产</router-link></li>
        <li class="price">￥4.80</li>
      </ul>
  </div>
</template>

<script>
	export default{
		name:"LastVisitd",
		data(){
			return{
				items:["w","q","e"]
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../../assets/style/varibles.styl';
	.last_visit_goods{
	    border: 1px solid #80d7dd;
	    height: auto;
	    margin: 5px 0 0 0;
	    width: 161px;
	    padding: 35px 0 6px 0;
	    text-align: center;
	    position: relative;
	}
	.visitbox{
		margin: 10px 0;
	}
	.top{
		height: 30px;
		width: 100%;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		text-align: center;
		line-height: 30px;
		background-color: #4ac7cf;
		position: absolute;
		top: 0;
	}
	.img{
		border:1px solid #e1e1e1;
	    width: 140px;
	    height: 140px;
	    margin: 0 auto;
	}
	.title{
		display: block;
	    line-height: 12px;
	    margin-top: 4px;
	    overflow: hidden;
	    text-align: center;
	    padding: 0 4px;
	    line-height: 1.3em;
	    font-size: 12px;
	}
	.titlelink{
		color: #4b4b4b;
        text-decoration: none;
        display: block;
        width: 100%;
	}
	.titlelink:hover{
		color:$mainColor;
	}
	.price{
		font-size: 14px;
	    color: #fb7c00;
	    font-weight: bold;
	    margin-top: 4px;
	}
	
	
	    
</style>