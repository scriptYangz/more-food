<template>
	<div>
		<Head></Head>
		<MyCart></MyCart>
		<Foot class="foot"></Foot>
	</div>
</template>

<script>
	import Head from "../public/Head"
	import Foot from "../public/Foot"
	import MyCart from "./children/MyCart"
	export default{
		name:"Cart",
        data(){
        	return{
        		
        	}
        },
        components:{
        	Head,
        	Foot,
        	MyCart
        }
		
	}
</script>

<style scoped="scoped" lang="stylus">
.foot{
	clear: both;
}
</style>