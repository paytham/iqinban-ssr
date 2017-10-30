// <!-- saved from url=(0035)https://bumfo.github.io/dialog.html -->
export function scroll (domElem) {
  let touchX
  let touchY

  // touchstart
  window.ontouchstart = function (e) {
    if (!document.body.classList.contains('hidden')) {
      return
    }

    let touch = e.changedTouches[0]
    touchX = touch.screenX
    touchY = touch.screenY

    if (!domElem.contains(e.target)) {
      e.preventDefault()
    }

    if (domElem.scrollTop === 0) {
      e.preventDefault()
    } else if (domElem.scrollTop === domElem.scrollHeight - domElem.clientHeight) {
      e.preventDefault()
    }
  }

  // touchend
  window.ontouchend = function (e) {
    let touch = e.changedTouches[0]

    if (Math.abs(touch.screenY - touchY) > 10 || Math.abs(touch.screenX - touchX) > 10) {
      return
    }

    if (!domElem.contains(e.target)) {
      document.body.classList.remove('hidden')
    }

    touchX = void 0
    touchY = void 0
  }

  window.ontouchcancel = function (e) {
    touchX = void 0
    touchY = void 0
  }

  let padding = 1

  requestAnimationFrame(function frame () {
    let min = 0
    let max = domElem.scrollHeight - domElem.clientHeight
    let val = domElem.scrollTop

    if (val === min) {
      domElem.scrollTop += padding
    } else if (val === max) {
      domElem.scrollTop -= padding
    }

    requestAnimationFrame(frame)
  })
}
