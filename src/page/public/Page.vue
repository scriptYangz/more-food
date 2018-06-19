<template>
	<div class="page">
		<div v-if="pages>1" class="page-content">
			{{curPage+1}}/{{pages}}
			<input  v-if="curPage>0" class="pagebut next" type="button" name="" id="" @click="changePage('last')" value="上一页"/>
			<input class="pagebut"  :class="{'active':curPage === index}" v-if="pages<=18"  @click="changePage(index)" v-for="(item,index) of pages" type="button" name="" id="" :value="item" />
			<input v-if="pages>18" v-for="num of 3" class="pagebut"  :class="{'active':curPage === (num-1)}" @click="changePage(num-1)"  type="button" name="" id="" :value="num" />
			<span v-if="pages>18" class='middle'>...</span>
			<input v-if="pages>18" v-for="num of lastTherePages" class="pagebut"  :class="{'active':curPage === (num-1)}" @click="changePage(num-1)"  type="button" name="" id="" :value="num" />
			<input v-if="curPage<pages-1" class="pagebut next" type="button" name="" id="" @click="changePage('next')" value="下一页"/>
		</div>
	</div>
</template>

<script>
export default{
	name:"Page",
	props:{
		thispages:Number
	},
	data(){
		return{
			pages:0,
			curPage:0
		}
	},
	computed:{
		lastTherePages:function(){
			let page = this.pages
			return [page-2,page-1,page]
		}
	},
	methods:{
		changeIndex: function (index) {
	      this.curPage = index
	   },
	   changePage:function(index){
	   	if(index === "last"){
	   		this.curPage--;
	   	}else if(index === "next"){
	   		this.curPage++;
	   	}else{
	   		 this.changeIndex(index)
	   	}
	   }
	}
}
</script>

<style lang="stylus" scoped="scoped">
@import "../../assets/style/varibles.styl";
	.page{
		height: 40px;
		line-height: 40px;
		width: 100%;
		margin: 10px 0;
		text-align: center;
	}
	.page-content{
		display: inline-block;
		height: 100%;
		
	}
	.pagebut{
		background-color: #fff;
		height: 26px;
		padding: 0 10px;
		border:1px solid #dddddd;
		margin-left: 10px;
		cursor: pointer;
		text-align: center;
	}
	.pagebut:focus{
		outline: none;
	}
	.active{
		background-color: $mainColor;
		border: none;
		color: white;
	}
	.next{
		position: relative;
		top: 1px;
	}
	.middle{
		padding-left: 10px;
	}
</style>