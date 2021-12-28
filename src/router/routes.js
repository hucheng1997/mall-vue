import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
    {
        path: '/home',
        component: Home,
        meta: {
            isHideFooter: true
        }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {
            isHideFooter: false
        }
    },
    {
        path: '/shopcart',
        component: ShopCart
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
        path: '/detail/:skuId',
        component: Detail,
        meta: {
            isHideFooter: false
        }
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
