<template>
  <div id="iqinban" :class="cls">
    <i-header ref="header" :class="{ 'headroom--unpinned': headroom }" class="i-jump"></i-header>
    <transition name="fade" mode="out-in">
      <router-view class="viewbox"></router-view>
    </transition>
    <i-footer></i-footer>
    <a class="backTop" href="javascript:" v-show="showBackTop" @click="scrollTop"><i class="iconfont icon-packup"></i></a>
  </div>
</template>

<script>
  import IHeader from './components/Header.vue'
  import IFooter from './components/Footer.vue'
  import { headroomMixin } from './client/headroom'
  import { scrollMixin } from './client/wow'
  import { jump } from './client/scroll'
  import { isIPad } from './client/deviceDetect'

  export default {
    name: 'App',
    components: {
      IHeader,
      IFooter
    },
    mixins: [headroomMixin, scrollMixin],
    methods: {
      scrollTop () {
        jump(0)
      }
    },
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
