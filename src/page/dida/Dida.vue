<template>
	<div>
		    <head-top></head-top>
		    <Nav></Nav>
		    <InDida></InDida>
		    <Foot class="footer"></Foot>
	</div>
</template>

<script>
	import headTop from '../public/Head'
	import Foot from '../public/Foot'
	import Nav from '../public/Nav'
	import InDida from './children/InDida'
export default{
	name:"Dida",
	components:{
		headTop,
		Foot,
		Nav,
		InDida
	},
	data(){
		return{
			
		}
	}
}
</script>

<style lang="stylus" scoped="scoped">
.footer{
	clear: both;
}
</style>