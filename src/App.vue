<template>
  <div id="iqinban">
    <i-header></i-header>
    <transition name="fade" mode="out-in">
      <router-view class="viewbox"></router-view>
    </transition>
    <i-footer></i-footer>
  </div>
</template>

<script>
  import IHeader from './components/Header.vue'
  import IFooter from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      IHeader,
      IFooter
    }
  }
</script>

<style lang="scss">
  @import "./assets/normolize";
  @import "./assets/base";
  @import "./assets/styles";
</style>
