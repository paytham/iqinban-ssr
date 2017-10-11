const headroomMixin = {
  mounted () {
    let _this = this
    function scroll( fn ) {
      let beforeScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      fn = fn || function() {}
      if (beforeScrollTop >= 80) {
        _this.headroom = true
      }
      window.addEventListener("scroll", function() {
        let afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let delta = afterScrollTop - beforeScrollTop
        if(delta === 0) return false
        fn(delta > 0 ? "down" : "up", afterScrollTop)
        beforeScrollTop = afterScrollTop
      }, false)
    }
    scroll(function(direction, delta) {
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

export { headroomMixin }