import axios from 'axios'
import md5 from 'md5'
import config from './config-server'

const SSR = global.__VUE_SSR_CONTEXT__
const cookies = SSR.cookies || {}
const username = cookies.username || ''
const parseCookie = cookies => {
  let cookie = ''
  Object.keys(cookies).forEach(item => {
    cookie += item + '=' + cookies[item] + '; '
  })
  return cookie
}

const api = {
  allow: config.allow,
  async post (url, params) {
    const cookie = parseCookie(cookies)
    const key = md5(url + JSON.stringify(params) + username)
    if (config.cached && config.cached.has(key)) {
      return Promise.resolve(config.cached.get(key))
    }
    //
    const res = await axios({
      method: 'post',
      url: `${config.url}${url}`,
      data: params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        cookie
      }
    })
    //
    if (config.cached && params.cache) {
      config.cached.set(key, res)
    }
    return res
  },
  async get (url, params) {
    const cookie = parseCookie(cookies)
    const key = md5(url + JSON.stringify(params) + username)
    if (config.cached && config.cached.has(key)) {
      return Promise.resolve(config.cached.get(key))
    }
    //
    const res = await axios({
      method: 'get',
      url: `${config.url}${url}`,
      params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        cookie
      }
    })
    //
    if (config.cached && params.cache) {
      config.cached.set(key, res)
    }
    return res
  }
}

export function createAPI ({ conf }) {
  Object.keys(conf).forEach(item => {
    config[item] = conf[item]
  })
  return api
}
