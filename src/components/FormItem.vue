<!-- Form Item -->
<template>
  <div
    class="i-form__item wow fadeInUp"
    :class="{ 'is-error': validateState === 'error', 'is-success': validateState === 'success' }"
    :data-wow-duration="duration + 'ms'"
    :data-wow-delay="delay + 'ms'">
    <label class="p2" :for="prop">{{ label }}</label>
    <span class="i-form__input">
      <slot></slot>
    </span>
    <span class="i-form__message">
      {{ validateMessage }}
    </span>
  </div>
</template>

<script>
  import AsyncValidator from 'async-validator'

  function noop () {}

  export default {
    name: 'FormItem',
    props: {
      label: String,
      prop: String,
      duration: {
        type: Number,
        default: 2000
      },
      delay: {
        type: Number,
        default: 1000
      }
    },
    methods: {
      getParent () {
        let parent = this.$parent
        if (parent.$options.name !== 'Form') {
          throw new Error('[FormItem] need [Form] as the parent')
        }
        return parent
      },
      getRules () {
        return this.getParent().rules
      },
      getFieldValue () {
        return this.getParent().model[this.prop]
      },
      getFilterRules () {
        let obj = this.getRules()
        return obj[this.prop]
      },
      init () {
        let rules = this.getRules()
        if (rules) {
          this.$on('form.blur', this.onFieldBlur)
          this.$on('form.change', this.onFieldChange)
        }
      },
      onFieldBlur () {
        this.validate('blur')
      },
      onFieldChange () {
        this.validate('change')
      },
      validate (trigger, callback = noop) {
        let rule = this.getFilterRules(trigger)
        if (!rule || rule.length === 0) {
          callback()
          return true
        }
        this.validateState = 'validating'
        let descriptor = {}
        descriptor[this.prop] = rule

        let validator = new AsyncValidator(descriptor)
        let model = {}
        model[this.prop] = this.getFieldValue()
        // 验证
        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''
          this.getParent().valid = this.validateState !== 'error'
          return callback(this.validateMessage)
        })
      }
    },
    mounted () {
      this.init()
    },
    data () {
      return {
        validateState: '',
        validateMessage: ''
      }
    }
  }
</script>