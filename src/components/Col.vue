<!---->
<template>
  <div class="grid-cell" :class="'col-' + span" v-if="span !== 0"><slot></slot></div>
  <div class="grid-cell" v-else-if="span === 0"><slot></slot></div>
  <div class="grid-cell" v-else-if="span > 12"><slot></slot></div>
</template>

<script>
  export default {
    name: 'Col',
    props: {
      span: {
        default: 0,
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid-cell {
    flex: 1;
    @for $i from 1 through 12 {
      &.col-#{$i} { flex: 0 0 $i / 12 * 100%; }
    }
    @media screen and (max-width: 999px) {
      @for $i from 1 through 12 {
        &.col-#{$i} { flex: 0 0 100% }
      }
    }
  }
</style>