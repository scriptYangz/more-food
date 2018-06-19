<template>
	<div>
		<Head></Head>
		<Nav></Nav>
		<InImport></InImport>
		<Foot class="foot"></Foot>
	</div>
</template>

<script>
import Head from "../public/Head"
import Foot from "../public/Foot"
import Nav from "../public/Nav"
import InImport from "./children/InImport"
export default{
	name:"Import",
	components:{
		Head,
		Nav,
		Foot,
		InImport
	}
}
</script>

<style lang="stylus" scoped="scoped">
.foot{
	clear: both;
}
</style>