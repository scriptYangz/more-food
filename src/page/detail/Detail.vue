<template>
		<div>
			<head-top></head-top>
		    <Nav></Nav>
		    <InDetail></InDetail>
		    <Foot class="footer"></Foot>
		</div>
</template>

<script>
	
	import headTop from '../public/Head'
	import Foot from '../public/Foot'
	import Nav from '../public/Nav'
	import InDetail from './children/InDetail'
export default{
	name:"Detail",
	data(){
		return{
			id:null,
			head: {},
			foot: {}
		}
	},
	components:{
		headTop,
		Foot,
		Nav,
		InDetail
	},
}
</script>

<style lang="stylus" scoped="scoped">
.footer{
	clear: both;
}
</style>