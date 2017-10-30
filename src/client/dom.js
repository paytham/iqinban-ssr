const uuid = () => {
  return Math.random().toString(36).substring(4, 9)
}

const addClass = (obj, cls) => {
  if (obj.classList) {
    obj.classList.add(cls)
  } else {
    let objClass = obj.className
    let blank = (objClass !== '') ? ' ' : ''
    obj.className = objClass + blank + cls
  }
}

const removeClass = (obj, cls) => {
  if (obj.classList) {
    obj.classList.remove(cls)
  } else {
    let objClass = ' ' + obj.className + ' '
    objClass = objClass.replace(/(\s+)/gi, ' ')
    let removed = objClass.replace(' ' + cls + ' ', ' ')
    removed = removed.replace(/(^\s+)|(\s+$)/g, '')
    obj.className = removed
  }
}

const hasClass = (obj, cls) => {
  if (obj.classList) {
    return obj.classList.contains(cls)
  } else {
    let objClass = obj.className
    let objClassLst = objClass.split(/\s+/)
    for (let x in objClassLst) {
      if (objClassLst[x] === cls) {
        return true
      }
    }
    return false
  }
}

const toggleClass = (obj, cls) => {
  if (obj.classList) {
    obj.classList.toggle(cls)
  } else {
    if (this.hasClass(obj, cls)) {
      this.removeClass(obj, cls)
    } else {
      this.addClass(obj, cls)
    }
  }
}

const curStyle = (elem) => {
  return elem.currentStyle || document.defaultView.getComputedStyle(elem)
}

const client = () => {
  return {
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight,
    s: document.documentElement.scrollHeight
  }
}

const isElementInViewport = (el) => {
  let rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= document.documentElement.clientHeight &&
    rect.right <= document.documentElement.clientWidth
  )
}

const offsetLeft = (element) => {
  return this.offset(element, 'offsetLeft')
}

const offsetTop = (element) => {
  return this.offset(element, 'offsetTop')
}

const offset = (element) => {
  let args = Array.prototype.slice.call(arguments, 1)
  let type = args[0]
  let [actualLeft, actualTop] = [element.offsetLeft, element.offsetTop]
  let current = element.offsetParent
  while (current !== null) {
    actualLeft += current.offsetLeft
    actualTop += current.offsetTop
    current = current.offsetParent
  }
  if (type === 'offsetLeft') {
    return actualLeft
  } else if (type === 'offsetTop') {
    return actualTop
  }
  return ({
    left: actualLeft,
    top: actualTop
  })
}

export {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  offset,
  offsetLeft,
  offsetTop,
  uuid,
  client,
  isElementInViewport,
  curStyle
}
