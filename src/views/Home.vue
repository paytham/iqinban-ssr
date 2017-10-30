<!-- 首页 -->
<template>
  <main class="i-home">
    <section class="i-section i-home__section i-home__section1">
      <!--<div class="img wow fadeInRight" data-wow-duration="1s"></div>-->
      <div class="i-section__text i-home__section-text i-home__section1-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈
        </p>
        <a class="b wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms"
           href="https://weidian.com/?userid=273581281&wfr=qr&isQRscan=1"><span>前往购买</span></a>
      </div>
    </section>
    <section class="i-home__section4">
      <i-row class="container">
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <div class="img score wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms"></div>
            <p class="p1 wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms">丰富优质的曲库<em>海量乐谱随身带</em></p>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <div class="img stream wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms"></div>
            <p class="p1 wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms">多种弹奏模式<em>娱乐学习两不误</em></p>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-home__section4-col floatcenter">
            <div class="img mis wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms"></div>
            <p class="p1 wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms">智能纠错识别<em>在家练琴好帮手</em></p>
          </div>
        </i-col>
      </i-row>
    </section>
    <section class="i-section i-home__section i-home__section2">
      <div class="i-section__text i-home__section-text i-home__section2-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">优美旋律，信手拈来</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          跟随瀑布流按下琴键，不用掌握五线谱，也可轻松上手，弹琴从未如此简单
        </p>
        <router-link class="b wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms" to="/sparring">
          <span>了解详情</span>
        </router-link>
      </div>
    </section>
    <section class="i-section i-home__section i-home__section3">
      <div class="i-section__article i-home__section-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">钢琴在线教学整体解决方案</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          实现钢琴教学全过程的信息化管理，为中小型专业培训机构以及个人教学工作室量身打造
        </p>
        <router-link class="b wow fadeInUp" data-wow-duration="2.5s" data-wow-delay="500ms" to="/system"></router-link>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'
  import { wowMixin } from '../client/mixins'

  export default {
    name: 'Home',
    components: {
      IRow,
      ICol
    },
    mixins: [wowMixin],
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
