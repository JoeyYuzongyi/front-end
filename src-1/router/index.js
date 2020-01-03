import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
import Home from '../views/home'
import Shop from '../views/shop'
Vue.use(Router)
export default new Router({
  routes: [
    {
			path : '/',component: Home
		},
   {path:'/',component:Shop}
  ]
})
