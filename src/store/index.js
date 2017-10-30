import Vue from 'vue'
import Vuex from 'vuex'
import common from './client/common'
import cooperation from './client/cooperation'

Vue.use(Vuex)

// 全局
export function createStore () {
  return new Vuex.Store({
    modules: {
      common,
      cooperation
    },
    state: {
      imgUrl: 'http://www.iqinban.com/website',
      // imgUrl: 'http://192.168.1.101:8080',
      options: [
        {
          value: 1,
          label: '培训机构'
        },
        {
          value: 2,
          label: '私教工作室'
        },
        {
          value: 3,
          label: '琴行/经销商'
        },
        {
          value: 4,
          label: '琴厂'
        }
      ]
    }
  })
}
