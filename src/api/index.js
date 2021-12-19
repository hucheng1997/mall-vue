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
