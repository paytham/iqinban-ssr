<!-- 琴伴智能陪练 -->
<template>
  <main class="i-sparring">
    <section class="i-section i-sparring__section i-sparring__section1" v-lazy:background-image="imgUrl + '/section1.jpeg'">
      <div class="i-section__article i-sparring__section1-article">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">琴伴，你聪明的练琴伙伴</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-row-delay="300ms">
          多种弹奏模式，智能纠错，灵活适配全部键盘乐器。配套APP包含海量曲库和定制化教学视频，适用于课后复习、家长陪练和成人自学等多种使用场景
        </p>
        <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">购买小Q盒子</a>
        <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">下载琴伴APP</a>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section2">
      <img alt="pic1" v-lazy="imgUrl + '/pic1.jpeg'" class="wow fadeInLeft" data-wow-duration="2s" data-wow-offset="300">
      <div class="i-section__text i-sparring__section2-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">优质曲库，确保练琴质量</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">
          要想练好琴，曲谱质量是根本！琴伴曲库中的每一首单曲，都是由专业制谱团队经过39道工序数字化后得到，并经过专家顾问团队严格审查、试用，
          确保原版纸谱的每一个音符、每一条连线、每一处标记都得到原汁原味的完美传承。
        </p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic2.jpeg'" class="wow fadeInRight" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section3-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">功能丰富，贴近学员心理</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">
          先演示、再跟弹、最后挑战，先右手、再左手、最后双手，先慢速、再中速、最后快速，
          还有节拍器、背景音、……充分考虑学琴练琴过程和心理状态，通过丰富的功能和贴心的引导，
          助你循序渐进、平滑学习曲线、轻松掌握每一首新乐曲。
        </p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section2">
      <img alt="pic1" v-lazy="imgUrl + '/pic3.jpeg'" class="wow fadeInLeft" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section2-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">智能纠错，解决疑难杂症</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">
          “变态”的音符，繁杂的标记，赶不及的节奏……这一切都曾经让学琴的你无比抓狂？让送孩子学琴的你如闻天书？
          没关系，在琴伴独有基于机器学习的音视频双检测算法支持下，再复杂的乐句也条分缕析解构清楚，再多的错误也全部记录无所遁形。
          通过跟弹模式，更可开启实时反馈互动，智能纠错、遇错则停，彻底攻克疑难环节！
        </p>
      </div>
    </section>
    <section class="i-section i-sparring__section i-sparring__section3">
      <img alt="pic1" v-lazy="imgUrl + '/pic4.jpeg'" class="wow fadeInRight" data-wow-duration="2s">
      <div class="i-section__text i-sparring__section3-text">
        <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">瀑布流跟弹，激发学习兴趣</h1>
        <p class="p1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="300ms">
          练琴太枯燥，不懂五线谱，古典曲目太陌生……独创投影瀑布流模式，将乐谱形象化，零基础也能轻松上手弹。
          更有丰富曲库，多种风格，流行弹唱，经典儿歌，总有一款适合你
        </p>
      </div>
    </section>
    <section class="i-sparring__section4">
      <div class="i-sparring__section4-app">
        <img alt="logo" :srcset="imgUrl + '/logo.png'" class="wow fadeIn" data-wow-duration="2s">
        <div class="i-sparring__section4-text">
          <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">琴伴iPad客户端</h2>
          <a class="b wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms" href="javascript:">App Store 下载</a>
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