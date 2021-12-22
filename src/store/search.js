import {reqGetSearchInfo} from '@/api'

//模块化
const state = {
    searchList: {}
}

const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}

const actions = {
    async getSearchList({commit}, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
//项目当中getters的主要作用是简化仓库中的数据
const getters = {
    //当前形参state是当前仓库中的state，并非大仓库中的那个state
    goodsList(state) {
        //当意外情况发生时，可能返回是undefined，给予默认的数组
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    },

    total(state) {
        return state.searchList.total || 0
    }
}

export default {
    state, mutations, actions, getters
}
