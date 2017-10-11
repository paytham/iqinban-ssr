<!---->
<template>
  <header
    class="i-header"
    :class="{ 'is-active': isActive, 'is-opaque': $route.meta.isOpaque, 'is-opaque-transparent': $route.meta.isOpaqueTrans }">
    <div class="i-header__inner">
      <router-link to="/" class="i-header__home">
        <i class="iconfont icon-shouye"></i>
      </router-link>
      <div class="i-header__logo">
        <img alt="logo" src="../../public/logo-120.png">
        <span>iqinban</span>
      </div>
      <nav :class="{ 'is-active': isActive }">
        <router-link to="/" :class="{ 'is-active': $route.path === '/' }">首页</router-link>
        <router-link to="/sparring" :class="{ 'is-active': $route.path === '/sparring' }">琴伴智能陪练</router-link>
        <router-link to="/system" :class="{ 'is-active': $route.path === '/system' }">教学管理系统</router-link>
        <router-link to="/about" :class="{ 'is-active': $route.path === '/about' }">关于我们</router-link>
        <!--<router-link to="/help" :class="{ 'is-active': $route.path === '/help' }">帮助与支持</router-link>-->
        <router-link to="/corp" :class="{ 'is-active': $route.path === '/corp' }" class="noborder">商务合作</router-link>
      </nav>
      <a class="i-header__nav" href="javascript:" @click="isActive = !isActive">
        <i class="iconfont icon-hanbao"></i>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    },
    watch: {
      $route (val) {
        this.isActive = false
      }
    },
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
