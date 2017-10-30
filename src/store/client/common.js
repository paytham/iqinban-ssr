import * as types from '../mutations-type'
import fetch from '../../api'

let state = {
  resMsg: '',
  errMsg: '',
  showResMsg: false,
  showErrMsg: false,
  lang: 'zh_CN'
}

const mutations = {
  [types.RES_MSG] (state, { msg }) {
    state.showResMsg = !state.showResMsg
    state.resMsg = msg
  },
  [types.ERR_MSG] (state, { err }) {
    state.showErrMsg = !state.showErrMsg
    state.errMsg = err
  },
  [types.SET_LANG] (state, { lang }) {
    state.lang = lang
  }
}

const getters = {
  getResMsg: state => state.errMsg,
  getErrMsg: state => state.resMsg,
  getLang: state => state.lang
}

const actions = {
  setResMsg ({ commit }, msg) {
    commit(types.RES_MSG, { msg })
  },
  setErrMsg ({ commit }, err) {
    commit(types.ERR_MSG, { err })
  },
  async setLang ({ commit }, lang) {
    if (fetch.allow) {
      const { data: {data, code} } = await fetch.get(`language?lang=${lang}`)
      if (data && code === 200) {
        let storage = window.localStorage
        storage.setItem('lang', lang)
        commit(types.SET_LANG, { data })
      }
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
