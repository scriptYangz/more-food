import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		head:{},
		foot:{}
	},
	mutations:{
		changeHead(state,head){
			state.head = head
		},
		changeFoot(state,foot){
			state.foot = foot
		}
	}
})
