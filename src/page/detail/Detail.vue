<template>
		<div>
			<head-top></head-top>
		    <Nav></Nav>
		    <InDetail></InDetail>
		    <Foot></Foot>
		</div>
</template>

<script>
	import axios from 'axios'
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
	methods:{
		//获取商品id
		getDetailId(){
			if(this.$route.params.id){
				this.id = this.$route.params.id
			}
		},
		getDetailInfo() {
				axios.get('/api/public.json').then(this.getPublicInfoSucc)
				axios.get('/api/detail.json').then(this.getDetailInfoSucc)
	    },
		//获取公共信息
		getPublicInfoSucc(res){
				var res = res.data
				if(res.ret && res.content) {
				    this.head = res.content.head
					this.foot = res.content.foot
					this.$store.commit('changeHead', this.head)
					this.$store.commit('changeFoot', this.foot)
				}
		},
		getDetailInfoSucc(res){
			var res = res.data
				if(res.ret && res.content) {
/*					this.bannersrc = res.content.banner.bannersrc
					this.foodclass = res.content.banner.foodclass
					this.bannerbottom = res.content.banner.bannerbottom
					this.floors = res.content.main.floor
					this.sellBanner = res.content.main.sell.bannersrc
					this.sellFoodList = res.content.main.sell.foodlists
					this.newFoodList = res.content.main.new.foodlists
					this.bottomImg = res.content.main.new.bottomImg
					this.didamaoBanner = res.content.main.didamao.bannersrc
					this.didamaoFoodList = res.content.main.didamao.foodlists
					this.didamaoBottom = res.content.main.didamao.didamaoBottom*/
				}
		}
	},
	mounted(){
		this.getDetailId()
		this.getDetailInfo()
	}
}
</script>

<style lang="stylus" scoped="scoped">

</style>