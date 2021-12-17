//当前这个模块：API进行统一管理
import request from "@/api/request";
/**
 * 三级联动接口
 * /api/product/getBaseCategoryList GET请求 无参数
 */
export const reqCategoryList = () => request({url:'/product/getBaseCategoryList',method:'get'})
