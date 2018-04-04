import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import learn_vuerouter from '@/pages/learn_vuerouter'
import Vue_list from '@/pages/Vue_list'
import vue_component from '@/pages/vue_component'
import bind_class from '@/pages/bind_class'
import vue_form from '@/pages/vue-form'

import addpeople from '@/pages/addPeople'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	routes: [
	    {
	        path: '/',
	        // name: 'HelloWorld',
	        // component: HelloWorld,
	        redirect:'/home'
	    },
	    {
	    	path:'/learn_vuerouter',
	    	name:'learn_vuerouter',
	    	component:learn_vuerouter
	    },
	    {
	    	path:'/vue_list',
	    	name:'vue_list',
	    	component:Vue_list
	    },
	    {
	    	path:'/vue_component',
	    	name:'vue_component',
	    	component:vue_component
	    },
	    {
	    	path:'/vue_class',
	    	name:'vue_class',
	    	component:bind_class
	    },
	    {
	    	path:'/vue-form',
	    	name:'vue-form',
	    	component:vue_form
	    },
	    {
	    	path:'/addpeople',
	    	name:'addpeople',
	    	component:addpeople
	    },
	    {
	    	path:'/home',
	    	name:'home',
	    	component:home
	    }
	]
})
