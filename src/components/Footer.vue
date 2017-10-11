<!-- Footer -->
<template>
  <footer class="i-footer" :class="{ 'is-gradient': $route.meta.isGradient }">
    <i-row class="container">
      <i-col :span="2">
        <div class="i-footer__title" :class="{ 'is-active': activeIndex === 1, 'noborder': activeIndex === 1 }" @click="expand(1)">
          产品<span class="iconfont icon-unfold"></span>
        </div>
        <div class="i-footer__pane" :class="{ 'is-active': activeIndex === 1 }">
          <a href="https://weidian.com/?userid=273581281&wfr=qr&isQRscan=1" class="i-footer__item">小Q盒子</a>
          <a href="https://weidian.com/?userid=273581281&wfr=qr&isQRscan=1" class="i-footer__item">琴伴学生端</a>
          <router-link to="/" class="i-footer__item">琴伴教师端</router-link>
          <a href="http://www.iqinban.com/org_site" class="i-footer__item">机构端</a>
        </div>
      </i-col>
      <i-col :span="2">
        <div class="i-footer__title" :class="{ 'is-active': activeIndex === 2, 'noborder': activeIndex === 2 }" @click="expand(2)">
          关注我们<span class="iconfont icon-unfold"></span>
        </div>
        <div class="i-footer__pane" :class="{ 'is-active': activeIndex === 2 }">
          <router-link to="/" class="i-footer__item">微博</router-link>
          <router-link to="/" class="i-footer__item">微信公众号</router-link>
        </div>
      </i-col>
      <i-col :span="2">
        <div class="i-footer__title" :class="{ 'is-active': activeIndex === 3, 'noborder': activeIndex === 3 }" @click="expand(3)">
          服务<span class="iconfont icon-unfold"></span>
        </div>
        <div class="i-footer__pane" :class="{ 'is-active': activeIndex === 3 }">
          <!--<router-link to="/help" class="i-footer__item">使用帮助</router-link>-->
          <router-link to="/agreement" class="i-footer__item">用户协议</router-link>
          <router-link to="/privacy" class="i-footer__item">隐私条款</router-link>
          <router-link to="/about" class="i-footer__item">联系我们</router-link>
        </div>
      </i-col>
    </i-row>
    <div class="copyright">
      &copy;&nbsp;上海智凌信息技术有限公司&nbsp;&nbsp;&nbsp;沪ICP备15032675号-2
    </div>
  </footer>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'

  export default {
    name: 'Footer',
    components: {
      IRow,
      ICol
    },
    watch: {
      $route (val) {
        this.activeIndex = -1
      }
    },
    methods: {
      expand (index) {
        if (this.activeIndex === index) {
          this.activeIndex = -1
        } else {
          this.activeIndex = index
        }
      }
    },
    data () {
      return {
        activeIndex: -1
      }
    }
  }
</script>