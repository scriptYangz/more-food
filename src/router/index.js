import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/page/public/Head'
import Foot from '@/page/public/Foot'
import Home from '@/page/home/Home'
import Nav from '@/page/public/Nav'
import Banner from '@/page/home/children/Banner'
import FoodList from '@/page/home/children/FoodList'
import Sell from '@/page/home/children/Sell'
import New from '@/page/home/children/New'
import Didamao from '@/page/home/children/Didamao'
import Floor from '@/page/home/children/Floor'
import Detail from '@/page/detail/Detail'
import InDetail from '@/page/detail/children/InDetail'
import LastVisit from '@/page/public/LastVisit'
import Dida from '@/page/dida/Dida'
import InDida from '@/page/dida/children/InDida'
import FoodBox from '@/page/public/FoodBox'
import Page from '@/page/public/Page'
import Login from '@/page/login/Login'
import Register from '@/page/login/Register'
import Import from '@/page/import/Import'
import InImport from '@/page/import/children/InImport'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
      	path:'/Banner',
      	component:Banner
      },{
      	path:'/FoodList',
      	component:FoodList
      },{
      	path:'/Sell',
      	component:Sell
      },{
      	path:'/New',
      	component:New
      },{
      	path:'/Didamao',
      	component:Didamao
      },{
      	path:'/Floor',
      	component:Floor
      }
      ]
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/Foot',
      name: 'Foot',
      component: Foot
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail,
      children:[{
      	path:"/InDetail",
      	component:InDetail
      }]
    },
    {
    	path:'/LastVisit',
    	name:'LastVisit',
    	component:LastVisit
    },
    {
    	path:'/Dida',
    	name:'Dida',
    	component:Dida,
    	children:[{
    		path:"/InDida",
    		component:InDida
    	}]
    },
    {
    	path:'/FoodBox',
    	name:'FoodBox',
    	component:FoodBox
    },
    {
    	path:'/Page',
    	name:'Page',
    	component:Page
    },
    {
    	path:'/Login',
    	name:'Login',
    	component:Login
    },
    {
    	path:'/Register',
    	name:'Register',
    	component:Register
    },
    {
    	path:'/Import',
    	name:'Import',
    	component:Import,
    	children:[{
    		path:"/InImport",
    		component:InImport
    	}]
    }
  ]
})
