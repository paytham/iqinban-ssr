import LRU from 'lru-cache'

let api
if (process.__API__) {
  api = process.__API__
} else {
  api = process.__API__ = {
    api: 'http://192.168.1.101:8081/iqb/',
    timeout: 30 * 1000,
    cached: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    cacheItem: {},
    allow: false // 是否允许和后台交互
  }
}

export default api
