import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.config.productionTip = false
//注册全局组件

Vue.component(TypeNav.name, TypeNav)
import {reqCategoryList} from "@/api";
reqCategoryList()
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
