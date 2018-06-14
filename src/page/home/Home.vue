<template>
	<div>
		<head-top></head-top>
		<Nav></Nav>
		<Banner :bannersrc="bannersrc" :foodclass="foodclass" :bannerbottom="bannerbottom"></Banner>
		<Sell :sellBanner="sellBanner" :sellFoodList="sellFoodList"></Sell>
		<New :newFoodList="newFoodList" :bottomImg="bottomImg"></New>
		<Didamao :didamaoBottom="didamaoBottom" :didamaoFoodList="didamaoFoodList" :didamaoBanner="didamaoBanner"></Didamao>
		<Floor v-for="(floor,index) in floors" :floor="floor" :index="index" :key="index"></Floor>
		<Foot></Foot>
	</div>
</template>

<script>
	import headTop from '../public/Head'
	import Foot from '../public/Foot'
	import Nav from '../public/Nav'
	import Banner from './children/Banner'
	import Sell from './children/Sell'
	import New from './children/New'
	import Didamao from './children/Didamao'
	import Floor from './children/Floor'
	import axios from 'axios'
	export default {
		name: 'Home',
		data() {
			return {
				head: {},
				foot: {},
				bannersrc: [],
				foodclass: [],
				bannerbottom: [],
				floors: [],
				sellBanner: [],
				sellFoodList: [],
				newFoodList: [],
				bottomImg: "",
				didamaoBanner: [],
				didamaoFoodList: [],
				didamaoBottom: []
			}
		},
		components: {
			headTop,
			Nav,
			Banner,
			Sell,
			New,
			Didamao,
			Floor,
			Foot
		},
		methods: {
			getHomeInfo() {
				axios.get('/api/public.json').then(this.getPublicInfoSucc)
				axios.get('/api/home.json').then(this.getHomeInfoSucc)
			},
			getPublicInfoSucc(res){
				var res = res.data
				if(res.ret && res.content) {
				    this.head = res.content.head
					this.foot = res.content.foot
					this.$store.commit('changeHead', this.head)
					this.$store.commit('changeFoot', this.foot)
				}
			},
			getHomeInfoSucc(res) {
				var res = res.data
				if(res.ret && res.content) {
					this.bannersrc = res.content.banner.bannersrc
					this.foodclass = res.content.banner.foodclass
					this.bannerbottom = res.content.banner.bannerbottom
					this.floors = res.content.main.floor
					this.sellBanner = res.content.main.sell.bannersrc
					this.sellFoodList = res.content.main.sell.foodlists
					this.newFoodList = res.content.main.new.foodlists
					this.bottomImg = res.content.main.new.bottomImg
					this.didamaoBanner = res.content.main.didamao.bannersrc
					this.didamaoFoodList = res.content.main.didamao.foodlists
					this.didamaoBottom = res.content.main.didamao.didamaoBottom
				}
			}
		},
		mounted() {
			this.getHomeInfo()
		}
	}
</script>

<style>

</style>