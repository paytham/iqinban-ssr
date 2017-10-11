export function isPc () {
  let userAgentInfo = navigator.userAgent
  let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export function mobileType () {
  let u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    return 'Android'
  } else if (u.indexOf('iPhone') > -1) {
    return 'iPhone'
  } else if (u.indexOf('Windows Phone') > -1) {
    return 'WinPhone'
  }
}

export function isIPad () {
  let ua = navigator.userAgent
  return ua.indexOf('iPad')
}