<!-- 商务合作 -->
<template>
  <main class="i-corp">
    <section class="i-section i-corp__section1">
      <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">请填写以下信息，我们会尽快与您取得联系。</h2>
      <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
        公司愿与钢琴制造、销售、培训等业界同仁携手合作，迎接消费升级背景下的时代发展机会，一起开拓钢琴教育、
        娱乐和租售等相关市场。请填写以下信息，我们会尽快与您取得联系。
      </p>
      <form class="i-form wow fadeInUp" data-wow-duration="2s" data-wow-delay="500ms">
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="750ms">
          <label class="p2" for="type">类型</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="type" id="type">
          </span>
        </div>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
          <label class="p2" for="company">公司名</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="company" id="company">
          </span>
        </div>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.25s">
          <label class="p2" for="name">姓名</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="name" id="name">
          </span>
        </div>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
          <label class="p2" for="email">邮箱</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="email" id="email">
          </span>
        </div>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.75s">
          <label class="p2" for="mobile">电话</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="mobile" id="mobile">
          </span>
        </div>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.75s">
          <p class="p3">我们非常重视您的隐私，只会将以上信息用于收集时所说明的目的或符合法律规定的其他一致目的。</p>
        </div>
        <button class="i-form__button b wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s"></button>
      </form>
    </section>
  </main>
</template>

<script>
  import { wowMixin } from '../client/wow'

  export default {
    name: 'Corp',
    mixins: [wowMixin],
    title () {
      return '琴伴 | 商务合作'
    }
  }
</script>