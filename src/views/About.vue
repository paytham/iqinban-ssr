<!-- 关于我们 -->
<template>
  <main class="i-about">
    <section class="i-section i-about__section1"
             v-lazy:background-image="imgUrl + '/section3.jpeg'">
      <div class="i-section__article i-about__section1-article">
        <h1>错漏快慢，一目了然</h1>
      </div>
    </section>
    <section class="i-section i-about__section2">
      <div class="i-about__section2-text">
        <p class="p1">
          智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈，
          智能纠错系统采用基于机器学习的音频和图像识别算法，精确检测，实时反馈
        </p>
        <h1>错漏快慢，一目了然</h1>
        <i-row class="i-about__section2-container hasmargrin">
          <i-col :span="3" v-for="i in 4" :key="i">
            <div class="i-about__section2-item">
              <img alt="ico" v-lazy="imgUrl + '/logo.png'">
              <p class="p1">首席运营官--王先生</p>
            </div>
          </i-col>
        </i-row>
        <h1>错漏快慢，一目了然</h1>
        <div class="i-about__section2-container">
          <div class="i-about__section2-contact">
            <div class="i-about__section2-chr">
              <p class="p1">地址</p>
              <p class="p1">智能纠错系统采用基于机器学习的音频和图像</p>
            </div>
            <div class="i-about__section2-chr">
              <p class="p1">邮箱</p>
              <p class="p1">caiyuhao2015@gmail.com</p>
            </div>
            <div class="i-about__section2-chr">
              <p class="p1">电话</p>
              <p class="p1">10000000000</p>
            </div>
            <div class="i-about__section2-chr is-last">
              <p class="p1">联系人</p>
              <p class="p1">蔡先生</p>
            </div>
          </div>
          <div class="i-about__section2-map" id="map"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'
  import { Map } from '../client/map'

  export default {
    name: 'About',
    components: {
      IRow,
      ICol
    },
    methods: {
      showMap () {
        Map().then(BMap => {
          let map = new BMap.Map('map') // 创建Map实例
          map.centerAndZoom(new BMap.Point(121.609709, 31.182514), 15)
          map.addControl(new BMap.MapTypeControl())
          map.setCurrentCity('上海')
          map.enableScrollWheelZoom(false)
          let marker = new BMap.Marker(new BMap.Point(121.609709, 31.182514))
          let label = new BMap.Label('上海果凡科技有限公司', {offset: new BMap.Size(20, -10)})
          label.setStyle({
            border: 'none'
          })
          marker.setLabel(label)
          map.addOverlay(marker)
        })
      }
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    },
    mounted () {
      this.$nextTick(_ => {
        this.showMap()
      })
    }
  }
</script>