<!-- 商务合作 -->
<template>
  <main class="i-corp">
    <section class="i-section i-corp__section1">
      <h1>商务合作</h1>
      <p class="p2">
        商务合作全部可用条款，商务合作全部可用条款，商务合作全部可用条款，
        商务合作全部可用条款，商务合作全部可用条款，商务合作全部可用条款
      </p>
      <form class="i-form">
        <div class="i-form__item">
          <label class="p2" for="type">类型</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="type" id="type">
          </span>
        </div>
        <div class="i-form__item">
          <label class="p2" for="company">公司名</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="company" id="company">
          </span>
        </div>
        <div class="i-form__item">
          <label class="p2" for="name">姓名</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="name" id="name">
          </span>
        </div>
        <div class="i-form__item">
          <label class="p2" for="email">邮箱</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="email" id="email">
          </span>
        </div>
        <div class="i-form__item">
          <label class="p2" for="mobile">电话</label>
          <span class="i-form__input">
            <input type="text" class="i-form__input-inner" name="mobile" id="mobile">
          </span>
        </div>
        <div class="i-form__item">
          <p class="p3">这里是提示信息哦~</p>
        </div>
        <button class="i-form__button b">提交</button>
      </form>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Corp',
    title () {
      return '琴伴 | 商务合作'
    }
  }
</script>