<!-- 关于我们 -->
<template>
  <main class="i-about">
    <section class="i-section i-about__section1"
             v-lazy:background-image="imgUrl + '/section3.jpeg'">
      <div class="i-section__article i-about__section1-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">关于我们</h1>
      </div>
    </section>
    <section class="i-section i-about__section2">
      <div class="i-about__section2-text">
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">
          上海智凌信息技术有限公司2014年成立于上海张江高科技园区，是张江移动互联网孵化器所孕育的一家拥有全套自主知识产权
          的在线音乐教育产品及解决方案提供商。
        </p>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">
          公司自2015年9月开始全力投入“琴伴”系列智能钢琴陪练产品的研发；2017年，公司
          完成了天使轮融资，随后发布了“琴伴”学生端App v2.0和配套的小Q盒子智能钢琴陪练设备。该产品可将琴谱转化为光电投影
          信号、投射到钢琴键盘表面，并能识别弹奏者的按键准确度，使得自助式钢琴娱乐和教学从此成为可能。同时，公司也推出了包
          含教师端和机构端在内的全套培训机构在线教学和教学管理解决方案，以满足钢琴培训行业在移动互联网时代信息化升级的巨大
          需求。
        </p>
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">团队成员</h1>
        <i-row class="i-about__section2-container hasmargrin">
          <i-col :span="3">
            <div class="i-about__section2-item">
              <img class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" alt="ico" v-lazy="imgUrl + '/logo.png'">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">高祺<br>CEO</p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <img class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" alt="ico" v-lazy="imgUrl + '/logo.png'">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">张五生<br>软件系统专家</p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <img class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" alt="ico" v-lazy="imgUrl + '/logo.png'">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">史春建<br>视频算法专家</p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <img class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" alt="ico" v-lazy="imgUrl + '/logo.png'">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">万永菁<br>音频算法专家</p>
            </div>
          </i-col>
        </i-row>
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">联系我们</h1>
        <div class="i-about__section2-container">
          <div class="i-about__section2-contact">
            <div class="i-about__section2-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">邮箱：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">bd@iqinban.com</p>
            </div>
            <div class="i-about__section2-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="400ms">电话：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="450ms">+86 21 60535238</p>
            </div>
            <div class="i-about__section2-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">手机：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="550ms">+86 139-0180-5176</p>
            </div>
            <div class="i-about__section2-chr is-last">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="600ms">地址：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="650ms">上海市浦东新区环科路515号绿地智创商务中心1号楼401</p>
            </div>
          </div>
          <div class="i-about__section2-map" :class="{ 'is-fullscreen': fullscreen }">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'
  import { Map } from '../client/map'
  import { wowMixin } from '../client/wow'

  export default {
    name: 'About',
    components: {
      IRow,
      ICol
    },
    mixins: [wowMixin],
    title () {
      return '琴伴 | 关于我们'
    },
    methods: {
      showMap () {
        let _this = this
        Map().then(BMap => {
          let map = new BMap.Map('map') // 创建Map实例
          map.centerAndZoom(new BMap.Point(121.609709, 31.182514), 15)
          map.addControl(new BMap.MapTypeControl())
          map.setCurrentCity('上海')
          map.enableScrollWheelZoom(false)
          let marker = new BMap.Marker(new BMap.Point(121.609709, 31.182514))
          let label = new BMap.Label('上海智凌信息技术有限公司', {offset: new BMap.Size(20, -10)})
          label.setStyle({ border: 'none' })
          marker.setLabel(label)
          map.addOverlay(marker)
          map.addTileLayer(new BMap.PanoramaCoverageLayer())
          let stCtrl = new BMap.PanoramaControl()
          stCtrl.setAnchor(BMAP_ANCHOR_TOP_LEFT)
          stCtrl.setOffset(new BMap.Size(0, 0))
          map.addControl(stCtrl)
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
    },
    data () {
      return {
        fullscreen: false
      }
    }
  }
</script>