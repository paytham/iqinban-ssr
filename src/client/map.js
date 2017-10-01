export function Map (ak) {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      /*eslint-disable*/
      resolve(BMap)
    }
    ak = 'yFFQy0IyU63OcUzUAsD7j31M08eVsFO3'
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
