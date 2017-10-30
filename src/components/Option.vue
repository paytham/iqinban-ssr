<!-- Option -->
<template>
  <a href="javascript:" class="i-option" @click="onItemClick">{{ label }}</a>
</template>

<script>
  export default {
    name: 'Option',
    props: {
      value: [String, Number],
      label: [String, Number]
    },
    methods: {
      onItemClick () {
        this.$parent.selectValue = this.value
        this.$parent.selectLabel = this.label
        this.$parent.show = false
      }
    }
  }
</script>