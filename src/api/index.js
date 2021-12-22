//当前这个模块：API进行统一管理
import request from "@/api/ajax";
import mockRequest from "@/api/mockAjax";

/**
 * 三级联动接口
 * /api/product/getBaseCategoryList GET请求 无参数
 */
export const reqCategoryList = () => request({url:'/product/getBaseCategoryList',method:'get'})

/**
 * 获取banner（Home页面轮播图）
 */
export const reqBannerList = () => mockRequest({url:'/banner',method:'get'})

/**
 * 获取floor（Home页面轮播图）
 */
export const reqFloorList = () => mockRequest({url:'/floor',method:'get'})

//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>request({url:"/list",method:"post",data:params});
