import * as types from '../mutations-type'
import fetch from '../../api'

const actions = {
  postCooperator ({ commit }, cooperator) {
    fetch.allow && fetch.post('cooper/add', cooperator)
      .then(res => {
        commit(types.RES_MSG, { msg: res.data })
      }, err => {
        commit(types.ERR_MSG, { err: err })
      }).catch(err => {
        commit(types.ERR_MSG, { err: err })
      })
  }
}

export default {
  actions
}
