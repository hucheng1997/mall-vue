import {reqCategoryList, reqBannerList} from "@/api";
//模块化
const state = {
    //三级分类数据
    categoryList: [],
    //轮播图数据
    bannerList: []

}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    }
}
const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqBannerList()
        console.log(result)
        if (result.code === 200) {
            commit('BANNERLIST', result.data)
        }
    }
}

const getters = {}

export default {
    state, mutations, actions, getters
}
