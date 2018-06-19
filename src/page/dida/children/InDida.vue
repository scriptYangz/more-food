<template>
	<div class="container">
		<LastVisit class="lastvisit" :lastvisit="lastvisit"></LastVisit>
		<div class="dida">
			<div class="dida-title">
				<el-breadcrumb separator="/">
					  <el-breadcrumb-item v-if="classes" v-for="cla in classes" :to="{}"><router-link class="breadlink" :to="cla.path">{{cla.name}}</router-link></el-breadcrumb-item>
					  <el-breadcrumb-item v-if="foodlist.length" :to="{}">共有{{foodlist.length}}种商品</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="dida-content">
				<div class="selltitle">
					<ul class="selltitle-list">
						<li class="selltitle-li">默认</li>
						<li class="selltitle-li">销量<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">好评<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">最新<span class="iconfont">&#xe62a;</span> </li>
						<li class="selltitle-li">价格<span class="iconfont">&#xe60c;</span> </li>
					</ul>
				</div>
				<div class="sellcontent">
					<FoodBox v-if="foodlist.length" class="foodbox" v-for="food in foodlist" :food="food"></FoodBox>
				</div>
			</div>
			<Page :thispages="thispages"></Page>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import LastVisit from '../../public/LastVisit'
	import FoodBox from '../../public/FoodBox'
	import Page from '../../public/Page'
	export default{
		name:"InDida",
		data(){
			return{
				lastvisit:[],
				classes:[{name:"首页",path:'/'},{name:"嘀嗒猫",path:'/Dida'}],
				foodlist:[],
				thispages:null
			}
		},
		components:{
			LastVisit,
			FoodBox,
			Page
		},
		methods:{
				getDidaInfo(){
				axios.get('/api/dida.json').then(this.getDidaInfoSucc)
		},
		
		getDidaInfoSucc(res){
			var res = res.data
				if(res.ret && res.content) {
					this.lastvisit = res.content.main.lastvisit
					this.foodlist = res.content.main.foodlist
					this.thispages = res.content.main.pages
				}
		}
				
		},
		mounted(){
			this.getDidaInfo()
		}
		
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '../../../assets/style/varibles.styl';
.container{
	width: $containerWidth;
	margin: 0 auto;
	padding: 20px 0;
}
.lastvisit{
	float: left;
}
.dida{
	width: 950px;
	font-size: 12px;
	color: #4B4B4B;
	margin-left: 10px;
	float: left;
}
.dida a:hover{
	text-decoration: none;
	color: $mainColor;
}
.dida-title{
	width: 100%;
	padding: 10px 0;
	padding-left: 10px;
	border-bottom:1px solid #dddddd;
	border-top:1px solid #dddddd;
	
}

.dida-content{
	margin-top: 10px;
	width: 960px;
}
.iconfont{
	color: #aeaeae;
	font-size: 8px; 
}
.selltitle{
	height: 40px;
	width: 100%;
	background-color: #f7f7f7;
}
.selltitle-li{
	height: 40px;
	width: 71px;
	text-align: center;
	line-height: 40px;
	border-right: 1px solid #dddddd;
	float: left;
	cursor: pointer;
}
.selltitle-li:hover{
	color: $mainColor;
}

.sellcontent{
	margin-top: 10px;
}
.foodbox{
	float: left;
}
.page{
	float: left;
}
</style>