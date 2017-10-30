/*eslint-disable*/
import fetch from '../../api'

export default {
  namespaced: true,
  // 重要信息：state必须是一个函数
  // 因此可以创建多个实例化改模块
  state: () => ({
    module: {},
    article: []
  }),
  actions: {
    getCooperMo ({ commit, params }) {
      commit('GET_COOPER_MO', { module: params })
    }
  },
  mutations: {
    GET_COOPER_MO ({ state, module }) {
      state.mobile = module
    }
  }
}
