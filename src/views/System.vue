<!-- 教学管理系统 -->
<template>
  <main class="i-system">
    <section class="i-section i-system__section i-system__section1">
      <div class="i-section__article i-system__section1-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">钢琴在线教学整体解决方案</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          解决现有钢琴教学中存在的师生交流方式单一，学习过程艰苦枯燥和沉淀数据少等问题，为传统教学添砖加瓦、为中小型培训机构和个人教学工作室赋能。
        </p>
        <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms" href="javascript:">申请试用资格</a>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section2">
      <i-row class="container-fluid">
        <i-col :span="4">
          <div class="i-system__section2-article">
            <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">培训机构</h2>
            <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
              无需自行构建自己的信息化体系，免费注册琴伴网页版就可以将自己的教学资源和教学过程上线，
              轻松实现教学过程管理、教学人事管理、课程资源传播和自身的品牌宣传。
            </p>
            <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms"
               href="javascript:" @click="scrollTo(1)">了解更多</a>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-system__section2-article">
            <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">教师</h2>
            <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
              通过教师端App与机构端配合实现线上、线下教学过程一体化。在提升教学效率和质量的同时，
              还能利用碎片时间通过在线陪练辅导、批改练琴作业等增加收入，或通过发表原创内容打造知名度。
            </p>
            <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms"
               href="javascript:" @click="scrollTo(2)">了解更多</a>
          </div>
        </i-col>
        <i-col :span="4">
          <div class="i-system__section2-article">
            <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">学生</h2>
            <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
              获取海量的优质曲谱，各类教学内容——在线教学音视频、交互式问答考试、练琴作业批改答复等等……
              整个学习过程，事无巨细完全记录，家长也能够通过成长页面看懂孩子们的进步和问题。
            </p>
            <a class="b wow fadeInUp disable" data-wow-duration="2s" data-wow-delay="500ms" href="javascript:">敬请期待</a>
          </div>
        </i-col>
      </i-row>
    </section>
    <section class="i-jump i-section i-system__section i-system__section3 i-system_l1">
      <div title="pic1" class="wow fadeInLeft img pic1" data-wow-duration="2s"></div>
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo1" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">强大丰富的课程资源管理</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          包含“教材-课件-知识点”和“题库-试卷”等多级内容设置，支持视频、音频、图片、文字的上传、下载、混合编辑和整合，
          可以创建带交互式答题的课程内容文件，完美实现多媒体教学内容的分发。
        </p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4 i-system_l2">
      <div title="pic2" class="wow fadeInRight img pic2" data-wow-duration="2s"></div>
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo2" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">便捷的人员组织和管理</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          支持对教师、学生和班级的各种增删改查操作。
        </p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3 i-system_l3">
      <div title="pic3" class="wow fadeInLeft img pic3" data-wow-duration="2s"></div>
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo3" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">以课表为核心的课程管理</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          将教师-学生-教材-课时安排-考试紧紧联结在一起。支持多课时设置和课程表生成。
        </p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section4 i-system_l4">
      <div title="pic4" class="wow fadeInRight img pic4" data-wow-duration="2s"></div>
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo4" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">全面的数据统计</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          每个模块、每个管理单位都有各自独立的数据统计单元，实现了对教学全过程和结果数据的准确记录和图表分析。
        </p>
      </div>
    </section>
    <section class="i-jump i-section i-system__section i-system__section4 i-system__section5 i-system_l5">
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo5" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">班级动态全掌握</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          基于学生动态和教学任务的管理模式，简化教师的工作流程，让教师专注于教学本身。
        </p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3 i-system_l6">
      <div title="pic6" class="wow fadeInRight img pic6" data-wow-duration="2s"></div>
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo6" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">辅导资料轻松发</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          课件、习题、练习曲，资源丰富多维，全方位提升学员对学习内容的理解和感悟。更可针对不同学生定制分发不同内容、因材施教。
        </p>
      </div>
    </section>
    <section class="i-section i-system__section i-system__section3 i-system__section7 i-system_l7">
      <div class="i-section__text i-system__section3-text">
        <h3>
          <div class="wow fadeInUp img logo7" data-wow-duration="2s" data-wow-delay="250ms"></div>
          <span class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">学生作业随时改</span>
        </h3>
        <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
          家里、路上、咖啡馆……只要有网络，哪里都可以批改点评音视频练琴记录。点评方式类似微信，支持语音、文字、涂鸦，简洁方便。
        </p>
      </div>
    </section>
  </main>
</template>

<script>
  import IRow from '../components/Row.vue'
  import ICol from '../components/Col.vue'
  import { wowMixin } from '../client/mixins'
  import { jump } from '../client/anchor'

  export default {
    name: 'System',
    components: {
      IRow,
      ICol
    },
    mixins: [wowMixin],
    title () {
      return '琴伴 | 教学管理系统'
    },
    computed: {
      imgUrl () {
        return this.$store.state.imgUrl
      }
    },
    methods: {
      scrollTo (index) {
        jump(index)
      }
    }
  }
</script>