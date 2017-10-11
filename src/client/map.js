/**
 * Baidu Map Instance Created by Paytham<caiyuhao2015@gmail.com> 2017/10/11
 */

// load script
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

// Create Map
export function drawMap (BMap) {
  let map = new BMap.Map('map') // 创建Map实例
  let mp = map
  map.centerAndZoom(new BMap.Point(121.609709, 31.182514), 15)
  map.setCurrentCity('上海')
  map.enableScrollWheelZoom(false)

  // Info Overlay
  function InfoOverlay (text, point) {
    this.point = point
    this.text = text
  }
  InfoOverlay.prototype = new BMap.Overlay()
  InfoOverlay.prototype.initialize = function () {
    let div = this._div = document.createElement("div")
    div.setAttribute('class', 'info-overlay')
    div.style.zIndex = BMap.Overlay.getZIndex(this.point.lat)
    let span = document.createElement('span')
    span.appendChild(document.createTextNode(this.text))
    div.appendChild(span)
    map.getPanes().labelPane.appendChild(div)
    return div
  }
  InfoOverlay.prototype.draw = function () {
    let pixel = map.pointToOverlayPixel(this.point)
    this._div.style.left = pixel.x - 93 + 'px'
    this._div.style.top  = pixel.y - 80 + 'px'
  }

  /*eslint-disable*/
  function offset (curEle) {
    let totalLeft = null
    let totalTop = null
    let par = curEle.offsetParent
    //首先加自己本身的左偏移和上偏移
    totalLeft += curEle.offsetLeft
    totalTop += curEle.offsetTop
    // 只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
    while (par) {
      if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
        // 累加父级参照物的边框
        totalLeft += par.clientLeft
        totalTop += par.clientTop
      }
      // 累加父级参照物本身的偏移
      totalLeft += par.offsetLeft
      totalTop += par.offsetTop
      par = par.offsetParent
    }
    return {
      left: totalLeft,
      top: totalTop
    }
  }

  let myCompOverlay = new InfoOverlay('上海智凌信息技术有限公司', new BMap.Point(121.609709, 31.182514))
  map.addOverlay(myCompOverlay)

  // Marker
  let marker = new BMap.Marker(new BMap.Point(121.609709, 31.182514))
  map.addOverlay(marker)

  // 构造全景控件
  map.addTileLayer(new BMap.PanoramaCoverageLayer())
  let stCtrl = new BMap.PanoramaControl()
  stCtrl.setOffset(new BMap.Size(20, 20));
  map.addControl(stCtrl)
}
