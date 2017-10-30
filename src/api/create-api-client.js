import axios from 'axios'
import config from './config-client'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => res, err => {
  Promise.reject(err.response)
})

// 检查http 状态码
function checkStatus (response) {
  let res = Object.create(null)
  if (response.status === 200 || response.status === 304) {
    res = response
    res.data.code = response.status
    res.data.data = response.data
    res.data.message = response.data.msg
  } else {
    res = {
      data: {
        code: -404,
        message: response.statusText,
        data: ''
      }
    }
  }
  if (res.data.code !== 200) {
    // store.dispatch('showMessage', response.data.message)
  }
  return res
}

const api = {
  allow: config.allow,
  post (url, params) {
    return axios({
      method: 'post',
      url: `${config.url}${url}`,
      data: params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(checkStatus)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url: `${config.url}${url}`,
      params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus)
  }
}

export function createAPI ({ conf }) {
  Object.keys(conf).forEach(item => {
    config[item] = conf[item]
  })
  return api
}
