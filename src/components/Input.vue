<!-- Input -->
<template>
  <span :class="textarea ? 'i__textarea' : 'i__input'">
    <textarea
      class="i-form__textarea-inner"
      :placeholder="placeholder"
      :value="value"
      @blur="blur"
      @input="updateValue($event.target.value)"
      v-if="textarea">
    </textarea>
    <input
      class="i-form__input-inner"
      :placeholder="placeholder"
      :value="value"
      @blur="blur"
      @input="updateValue($event.target.value)"
      v-else>
  </span>
</template>

<script>
  import emitter from '../util/emitter'

  export default {
    name: 'Input',
    mixins: [emitter],
    props: {
      value: [String, Number],
      placeholder: [String, Number, Function],
      textarea: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      updateValue (value) {
        this.$emit('input', value)
        // this.dispatch('FormItem', 'form.blur', value)
      },
      blur () {
        this.dispatch('FormItem', 'form.blur', this.value)
      }
    }
  }
</script>