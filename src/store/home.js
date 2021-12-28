import {reqCategoryList, reqBannerList, reqFloorList} from "@/api";
//模块化
const state = {
    //三级分类数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //floor数据
    floorList: [],
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
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
        if (result.code === 200) {
            commit('BANNERLIST', result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList()
        if (result.code === 200) {
            commit('FLOORLIST', result.data)
        }
    }
}

const getters = {}

export default {
    state, mutations, actions, getters
}
