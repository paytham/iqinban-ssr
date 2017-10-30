<!-- Form 表单 -->
<template>
  <form class="i-form wow fadeInUp" :data-wow-duration="duration + 'ms'" :data-wow-delay="delay + 'ms'">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      duration: {
        type: Number,
        default: 2000
      },
      delay: {
        type: Number,
        default: 500
      },
      rules: [Object],
      model: [Object]
    },
    data () {
      return {
        valid: true
      }
    }
  }
</script>