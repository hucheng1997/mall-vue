import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                isHideFooter: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: {
                isHideFooter: true
            },
            name: 'search'
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHideFooter: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isHideFooter: false
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})

