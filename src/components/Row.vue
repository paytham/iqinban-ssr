<!---->
<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row'
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>