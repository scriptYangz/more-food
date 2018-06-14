<template>
	<div class="banner">
		<el-carousel height='420px'>
			<el-carousel-item v-for="item in bannersrc" :key="item">
				<router-link to="/"><img class="banner-img" :src="item" /></router-link>
			</el-carousel-item>
		</el-carousel>
		<div class="banner-container">
			<div class="leftbar">
				<ul>
					<li class="leftbarli" v-for="(item,index) in foodclass">
						<router-link class="leftbarlink" to="/">{{item.name}}</router-link><span class="iconfont">&#xe636;</span>
						<ul class="rightside">
							<li v-for="link in item.content.common">
								<router-link class="rightsidelink" to="/">{{link}}</router-link>
							</li>
							<p class="recom">{{item.content.recommend.name}}</p>
							<li v-for="recom in item.content.recommend.content">
								<router-link class="rightsidelink" to="/">{{recom}}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<div class="banner-bottom">
				<router-link class="banner-bottom-link" to='/' v-for='(item,index) in bannerbottom' :key='index'><img class="banner-bottom-img" :src="item" /></router-link>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'banner',
		props: {
			bannersrc: Array,
			foodclass: Array,
			bannerbottom: Array
		},
		data() {
			return {

			}
		},
		mounted() {}
	}
</script>

<style scoped lang="stylus">
	@import "../../../assets/style/varibles.styl";
	.banner {
		position: relative;
		padding-bottom: 100px;
	}
	
	.el-carousel {
		overflow: hidden;
	}
	
	.banner-img {
		height: 100%;
		width: 100%;
	}
	
	.banner-container {
		width: $containerWidth;
		margin: 0 auto;
	}
	
	.leftbar {
		position: absolute;
		top: 0;
		width: 165px;
		height: 523px;
		z-index: 10;
		text-align: left;
	}
	
	.leftbarli {
		height: 47px;
		line-height: 43px;
		background-color: rgba(0, 0, 0, .7);
		text-align: center;
		position: relative;
		font-size: 14px;
	}
	
	.leftbarli:hover {
		background-color: rgba(0, 0, 0, .9);
	}
	
	.leftbarli .rightside {
		display: none;
		width: 180px;
		position: absolute;
		top: 0;
		right: -180px;
		background-color: rgba(255, 255, 255, .9);
		color: #4B4B4B;
	}
	
	.leftbarli:hover .rightside {
		display: block;
	}
	
	.leftbarlink {
		font-size: 14px;
		color: #fff;
		text-decoration: none;
		text-align: center;
	}
	
	.leftbarlink:hover {
		text-decoration: underline;
	}
	
	.rightside {
		border: 1px solid black;
		text-align: left;
		text-indent: 1em;
	}
	
	.rightsidelink {
		color: #4B4B4B;
		text-decoration: none;
	}
	
	.rightsidelink:hover {
		color: red;
	}
	
	.recom {
		color: #000;
		font-weight: bold;
	}
	
	.iconfont {
		color: #fff;
		font-size: 8px;
		position: absolute;
		right: 2px;
		top: 54%;
		transform: translate(-50%, -50%);
	}
	
	.banner-bottom {
		float: right;
	}
	
	.banner-bottom-link {
		display: inline-block;
		height: 100px;
		width: 241px;
		float: left;
	}
	
	.banner-bottom-img {
		height: 100%;
		width: 100%;
	}
</style>