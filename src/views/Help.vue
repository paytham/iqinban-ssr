<!-- 帮助与支持 -->
<template>
  <main class="i-help">
    <section class="i-section i-help__section1">
      <div class="i-section__article i-help__section1-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">错漏快慢，一目了然</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">全国统一客服热线：400-800-888</p>
      </div>
    </section>
    <section class="i-section i-help__section2">
      <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">硬件使用</h2>
      <div class="i-help__section2-container">
        <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">安装</h3>
        <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">连网</h3>
        <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">校准</h3>
        <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">注意事项</h3>
      </div>
      <i-row class="i-help__section2-list">
        <i-col :span="4" v-for="i in 6" :key="i">
          <div class="i-help__section2-item">
            <img alt="icon" class="wow fadeInUp" data-wow-duration="2s"
                 :src="imgUrl + '/logo.png'" :srcset="imgUrl + '/logo.png 1x, ' + imgUrl + '/logo.png 2x'">
            <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">安装</p>
            <P class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
              智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈
            </P>
          </div>
        </i-col>
      </i-row>
    </section>
    <section class="i-section i-help__section3">
      <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">会员计划</h2>
      <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
        智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈；
        智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈
      </p>
      <p class="p1 is-last wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">
        智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈
      </p>
    </section>
    <section class="i-section i-help__section4">
      <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">常见问题</h2>
      <div class="i-help__section4-item" v-for="i in 4" :key="i" :class="{ 'is-last': i === 4 }">
        <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">如何辨别合法的直销企业？是否有“准直销企业”和“备案的直销企业”？</h3>
        <P class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">
          根据《直销管理条例》，企业从事直销经营必须经过商务部批准获得直销经营许可。未经批准，任何单位和个人不得从事直销。
          商务部通过商务部直销行业管理信息系统（以下简称信息系统）公布经批准的直销企业名单，并实时更新。通过查询直销企业名单，可辨别该企业是否获得直销经营许可。
        </P>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'
  import { wowMixin } from '../client/mixins'

  export default {
    name: 'Help',
    components: {
      IRow,
      ICol
    },
    mixins: [wowMixin],
    title () {
      return '琴伴 | 帮助与支持'
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    }
  }
</script>