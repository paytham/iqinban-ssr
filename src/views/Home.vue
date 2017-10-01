<!-- 首页 -->
<template>
  <main class="i-home">
    <section class="i-section i-home__section i-home__section1" v-lazy:background-image="imgUrl + '/section1.jpeg'">
      <img alt="pic1" v-lazy="imgUrl + '/pic1.jpeg'">
      <div class="i-section__text i-home__section-text i-home__section1-text">
        <h1>错漏快慢，一目了然</h1>
        <p class="p1">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        <a class="b" href="javascript:">前往购买</a>
      </div>
    </section>
    <section class="i-section i-home__section i-home__section2">
      <img alt="pic1" v-lazy="imgUrl + '/pic2.jpeg'">
      <div class="i-section__text i-home__section-text i-home__section2-text">
        <h1>错漏快慢，一目了然</h1>
        <p class="p1">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        <a class="b" href="javascript:">前往购买</a>
      </div>
    </section>
    <section class="i-section i-home__section i-home__section3" v-lazy:background-image="imgUrl + '/section2.jpeg'">
      <div class="i-section__article i-home__section-article">
        <h1>错漏快慢，一目了然</h1>
        <p class="p1">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        <a class="b" href="javascript:">前往购买</a>
      </div>
    </section>
    <section class="i-home__section4">
      <i-row class="container">
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <img v-lazy="imgUrl + '/logo.png'" alt="ico">
            <p class="p1">智能纠错系统采用基于机器学习的音频和图像</p>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <img v-lazy="imgUrl + '/logo.png'" alt="ico">
            <p class="p1">智能纠错系统采用基于机器学习的音频和图像</p>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <img v-lazy="imgUrl + '/logo.png'" alt="ico">
            <p class="p1">智能纠错系统采用基于机器学习的音频和图像</p>
          </div>
        </i-col>
      </i-row>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'

  export default {
    name: 'Home',
    components: {
      IRow,
      ICol
    },
    title () {
      return '琴伴—你聪明的练琴伙伴'
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    }
  }
</script>
