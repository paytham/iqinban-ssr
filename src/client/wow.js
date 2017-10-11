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

export {
  wowMixin,
  scrollMixin
}
