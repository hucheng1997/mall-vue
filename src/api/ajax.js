//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

//引入进度条样式
//1、利用axios对象的方法create去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: '/api',
    //请求超时的时间5s
    timeout: 5000
})
//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (err) => {
    return Promise.reject(new Error(err.data))
})
export default requests;
