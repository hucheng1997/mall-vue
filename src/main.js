import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入仓库
import store from "@/store";
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
//注册全局组件
Vue.component(TypeNav.name, TypeNav)
//引入Mock数据
import '@/mock/mockServe'
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
