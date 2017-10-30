const wowMixin = {
  mounted () {
    let WOW = require('wow.js')
    this.$nextTick(_ => {
      const wow = new WOW({
        live: false
      })
      wow.init()
    })
  }
}

const scrollMixin = {
  mounted () {
    this.$nextTick(_ => {
      let _this = this
      window.addEventListener('scroll', function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        _this.showBackTop = scrollTop >= 800
      }, false)
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 800) {
        this.showBackTop = true
      }
    })
  },
  data () {
    return {
      showBackTop: false
    }
  }
}

const headroomMixin = {
  mounted () {
    let _this = this
    function scroll (fn) {
      let beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      fn = fn || function () {}
      if (beforeScrollTop >= 80) {
        _this.headroom = true
      }
      window.addEventListener('scroll', function () {
        let afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return false
        fn(delta > 0 ? 'down' : 'up', afterScrollTop)
        beforeScrollTop = afterScrollTop
      }, false)
    }
    scroll(function (direction, delta) {
      if (delta <= 10 && direction === 'up') {
        _this.headroom = false
      }
      if (delta >= 80 && direction === 'down') {
        _this.headroom = true
      }
    })
  },
  data () {
    return {
      headroom: false
    }
  }
}

export {
  wowMixin,
  scrollMixin,
  headroomMixin
}
