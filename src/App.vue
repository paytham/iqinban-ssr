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
  import { scrollMixin, headroomMixin } from './client/mixins'
  import { jump } from './client/anchor'
  import { isIPad } from './client/deviceDetect'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {
      IHeader,
      IFooter
    },
    mixins: [headroomMixin, scrollMixin],
    methods: {
      ...mapActions([
        'setLang'
      ]),
      scrollTop () { jump(0) },
      // 国际化
      async setLanguage () {
        let storage = window.localStorage
        let lang = storage.getItem('lang') || 'zh_CN'
        await this.setLang(lang)
      }
    },
    mounted () {
      this.$nextTick(_ => {
        this.cls = isIPad() > 0 ? 'is-ipad' : ''
        this.setLanguage()
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
  @import "./assets/select";
  /*.fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate3d(-5%, 0, 0);
  }*/
</style>
