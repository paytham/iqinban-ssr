<!-- 琴伴智能陪练 -->
<template>
  <main class="i-sparring">
    <section class="i-section i-sparring__section i-sparring__section1" v-lazy:background-image="imgUrl + '/section1.jpeg'">
      <div class="i-section__article i-sparring__section1-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-row-delay="300ms">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">前往购买</a>
        <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">前往购买</a>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section2">
      <img alt="pic1" v-lazy="imgUrl + '/pic1.jpeg'" class="wow fadeInLeft" data-wow-duration="2s" data-wow-offset="300">
      <div class="i-section__text i-sparring__section2-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic2.jpeg'" class="wow fadeInRight" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section3-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section2">
      <img alt="pic1" v-lazy="imgUrl + '/pic3.jpeg'" class="wow fadeInLeft" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section2-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic4.jpeg'" class="wow fadeInRight" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section3-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-sparring__section4">
      <div class="i-sparring__section4-app">
        <img alt="logo" :srcset="imgUrl + '/logo.png'" class="wow fadeIn" data-wow-duration="2s">
        <div class="i-sparring__section4-text">
          <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢</h2>
          <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">智能纠错系统采用</p>
          <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">App Store 下载链接</a>
        </div>
        <img alt="ercode" v-lazy="imgUrl + '/ercode.jpg'" class="floatright ercode wow fadeIn" data-wow-duration="2s" data-wow-delay="250ms">
      </div>
    </section>
  </main>
</template>

<script>
  import { wowMixin } from '../client/wow'

  export default {
    name: 'Sparring',
    mixins: [wowMixin],
    title () {
      return '琴伴 | 琴伴智能陪练'
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    }
  }
</script>