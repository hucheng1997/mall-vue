//当前这个模块：API进行统一管理
import request from "@/api/ajax";
import mockRequest from "@/api/mockAjax";

/**
 * 三级联动接口
 * /api/product/getBaseCategoryList GET请求 无参数
 */
export const reqCategoryList = () => request({url: '/product/getBaseCategoryList', method: 'get'})

/**
 * 获取banner（Home页面轮播图）
 */
export const reqBannerList = () => mockRequest({url: '/banner', method: 'get'})

/**
 * 获取floor（Home页面轮播图）
 */
export const reqFloorList = () => mockRequest({url: '/floor', method: 'get'})

//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => request({url: "/list", method: "post", data: params});
//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) => request({url: `/item/${skuId}`, method: 'get'});
//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post"
})
//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = () => request({url: '/cart/cartList ', method: 'get'});
//删除购物产品的接口
//URL:/api/cart/deleteCart/{skuId}   method:DELETE
export const reqDeleteCartById = (skuId) => request({url: `/cart/deleteCart/${skuId}`, method: 'delete'});
//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId, isChecked) => request({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
});
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => request({url: `/user/passport/sendCode/${phone}`, method: 'get'});
//注册
//url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data) => request({url: '/user/passport/register', data, method: 'post'});
//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) => request({url: '/user/passport/login', data, method: 'post'});
//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = ()=>request({url:'/user/passport/auth/getUserInfo',method:'get'});
//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> request({url:'/user/passport/logout',method:'get'});

