<!-- 关于我们 -->
<template>
  <main class="i-about">
    <section class="i-section i-about__section1">
      <div class="i-about__section1-article">
        <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">关于我们</h2>
      </div>
    </section>
    <section class="i-section i-about__section2">
      <div class="i-about__section2-text">
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">
          上海智凌信息技术有限公司2014年成立于上海张江高科技园区，是张江移动互联网孵化器所孕育的一家拥有全套自主知识产权
          的在线音乐教育产品及解决方案提供商。
        </p>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">
          公司自2015年9月开始全力投入“琴伴”系列智能钢琴陪练产品的研发；2017年，公司
          完成了天使轮融资，随后发布了“琴伴”学生端App v2.0和配套的小Q盒子智能钢琴陪练设备。该产品可将琴谱转化为光电投影
          信号、投射到钢琴键盘表面，并能识别弹奏者的按键准确度，使得自助式钢琴娱乐和教学从此成为可能。同时，公司也推出了包
          含教师端和机构端在内的全套培训机构在线教学和教学管理解决方案，以满足钢琴培训行业在移动互联网时代信息化升级的巨大
          需求。
        </p>
      </div>
    </section>
    <section class="i-section i-about__section3">
      <div class="i-about__section3-text">
        <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">团队成员</h2>
        <i-row class="i-about__section3-container hasmargrin">
          <i-col :span="3">
            <div class="i-about__section2-item">
              <div class="wow fadeInUp img img1" data-wow-duration="2s" data-wow-delay="350ms"></div>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">高祺<span>CEO</span></p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <div class="wow fadeInUp img img2" data-wow-duration="2s" data-wow-delay="350ms"></div>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">张五生<span>软件系统专家</span></p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <div class="wow fadeInUp img img3" data-wow-duration="2s" data-wow-delay="350ms"></div>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">史春建<span>视频算法专家</span></p>
            </div>
          </i-col>
          <i-col :span="3">
            <div class="i-about__section2-item">
              <div class="wow fadeInUp img img4" data-wow-duration="2s" data-wow-delay="350ms"></div>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">万永菁<span>音频算法专家</span></p>
            </div>
          </i-col>
        </i-row>
      </div>
    </section>
    <section class="i-section i-about__section4">
      <div class="i-about__section4-text">
        <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">联系我们</h2>
        <div class="i-about__section4-container">
          <div class="i-about__section4-contact">
            <div class="i-about__section4-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">邮箱：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">bd@iqinban.com</p>
            </div>
            <div class="i-about__section4-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="400ms">电话：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="450ms">
                <a href="tel:2160535238">+86 21 60535238</a>
              </p>
            </div>
            <div class="i-about__section4-chr">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">手机：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="550ms">
                <a href="tel:13901805167">+86 139-0180-5167</a>
              </p>
            </div>
            <div class="i-about__section4-chr is-last">
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="600ms">地址：</p>
              <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="650ms">上海市浦东新区环科路515号绿地智创商务中心1号楼401</p>
            </div>
          </div>
          <div class="i-about__section4-map">
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
  import { Map, drawMap } from '../client/map'
  import { wowMixin } from '../client/mixins'

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
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    },
    mounted () {
      this.$nextTick(_ => {
        Map().then(BMap => drawMap(BMap))
      })
    }
  }
</script>