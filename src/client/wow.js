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

export {
  wowMixin
}
