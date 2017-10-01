<!-- 教学管理系统 -->
<template>
  <main class="i-system">
    <section class="i-section i-system__section i-system__section1"
             v-lazy:background-image="imgUrl + '/section2.jpeg'">
      <div class="i-section__article i-system__section1-article">
        <h1>错漏快慢，一目了然</h1>
        <p class="p1">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        <a class="b" href="javascript:">前往购买</a>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section2">
      <i-row class="container-fluid">
        <i-col v-for="i in 3" :key="i" :span="4">
          <div class="i-system__section2-article">
            <h2>错漏快慢，一目了然</h2>
            <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
            <a class="b" href="javascript:">前往购买</a>
          </div>
        </i-col>
      </i-row>
      <div class="i-system__section2-container">
        <h2>错漏快慢，一目了然</h2>
        <i-row>
          <i-col :span="3" v-for="i in 4" :key="i">
            <div class="i-system__section2-title">
              <img alt="icon" v-lazy="imgUrl + '/logo.png'">
              <p class="p1">智能纠错系统采用基于机器学习</p>
            </div>
          </i-col>
        </i-row>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic1.jpeg'">
      <div class="i-section__text i-system__section3-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4">
      <img alt="pic1" v-lazy="imgUrl + '/pic2.jpeg'">
      <div class="i-section__text i-system__section4-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic3.jpeg'">
      <div class="i-section__text i-system__section3-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4">
      <img alt="pic1" v-lazy="imgUrl + '/pic4.jpeg'">
      <div class="i-section__text i-system__section4-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section2 i-system__section5">
      <div class="i-system__section2-container i-system__section5-container">
        <h2>错漏快慢，一目了然</h2>
        <i-row>
          <i-col :span="4" v-for="i in 3" :key="i">
            <div class="i-system__section2-title">
              <img alt="icon" v-lazy="imgUrl + '/logo.png'">
              <p class="p1">智能纠错系统采用基于机器学习</p>
            </div>
          </i-col>
        </i-row>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic1.jpeg'">
      <div class="i-section__text i-system__section3-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4">
      <img alt="pic1" v-lazy="imgUrl + '/pic2.jpeg'">
      <div class="i-section__text i-system__section4-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic3.jpeg'">
      <div class="i-section__text i-system__section3-text">
        <h3><img alt="icon" v-lazy="imgUrl + '/logo.png'"><span>错漏快慢，一目了然</span></h3>
        <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4 i-system__section6">
      <img alt="pic1" v-lazy="imgUrl + '/pic4.jpeg'">
      <div class="i-section__text i-system__section4-text">
        <div class="i-system__section6-text" v-for="i in 3" :key="i">
          <h2>错漏快慢，一目了然</h2>
          <p class="p2">智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'

  export default {
    name: 'System',
    components: {
      IRow,
      ICol
    },
    title () {
      return '琴伴 | 教学管理系统'
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    }
  }
</script>