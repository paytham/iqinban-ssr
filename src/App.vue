<template>
  <div id="iqinban" :class="cls">
    <i-header ref="header" :class="{ 'headroom--unpinned': headroom }"></i-header>
    <transition name="fade" mode="out-in">
      <router-view class="viewbox"></router-view>
    </transition>
    <i-footer></i-footer>
  </div>
</template>

<script>
  import IHeader from './components/Header.vue'
  import IFooter from './components/Footer.vue'
  import { headroomMixin } from './client/headroom'
  import { isIPad } from './client/deviceDetect'

  export default {
    name: 'App',
    components: {
      IHeader,
      IFooter
    },
    mixins: [headroomMixin],
    mounted () {
      this.$nextTick(_ => {
        if (isIPad() > 0) {
          this.cls = 'is-ipad'
        }
      })
    },
    data () {
      return {
        cls: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/normolize";
  @import "./assets/base";
  @import "./assets/styles";
</style>
