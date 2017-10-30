<!-- Select -->
<template>
  <span class="i-select" :class="{ 'is-active': show }">
    <div class="i-select__input" @click="onShow" id="qinban_select">
      <input typeof="text" title="" readonly disabled :placeholder="placeholder" v-model="selectLabel">
      <input type="hidden" :value="value">
      <a class="i-select__arrow">
        <i class="iconfont icon-unfold"></i>
      </a>
    </div>
    <transition name="select-fade">
      <div class="i-select__pane" v-show="show">
        <div class="i-select__viewbox" id="wrapper">
          <i-option class="is-last" label="暂无数据" v-if="$slots.default.length === 0"></i-option>
          <slot v-else></slot>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
  import IOption from './Option.vue'
  import MobileSelect from 'mobile-select'
  import { isPc } from '../client/deviceDetect'
  import { toggleClass } from '../client/dom'
  import emitter from '../util/emitter'

  export default {
    name: 'Select',
    components: {
      IOption
    },
    mixins: [emitter],
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      },
      title: {
        type: String,
        default: ''
      },
      value: [String, Number]
    },
    watch: {
      selectValue (value) {
        this.dispatch('FormItem', 'form.change', value)
        this.$emit('input', value)
      },
      show (val) {
        if (!isPc()) {
          toggleClass(document.body, 'hidden')
        } else {
          val ? document.addEventListener('click', this.onMaskClick, false)
            : document.removeEventListener('click', this.onMaskClick, false)
        }
      }
    },
    methods: {
      onShow () {
        if (isPc()) {
          this.show = !this.show
        }
      },
      onMaskClick () {
        this.show = false
      },
      createMobile () {
        if (!isPc()) {
          let _this = this
          /*eslint-disable*/
          new MobileSelect({
            trigger: '#qinban_select',
            title: '类型',
            wheels: [
              { data: _this.options }
            ],
            keyMap: {
              id: 'value',
              value: 'label'
            },
            triggerDisplayData: false,
            callback: function(indexArr, data){
              _this.selectValue = data[0].value
              _this.selectLabel = data[0].label
            }
          })
        }
      },
      initialize () {
        let options = this.options = this.$slots.default[0].context.options
        for (let item of options) {
          if (item.value === this.value) {
            this.selectLabel = item.label
          }
        }
      }
    },
    mounted () {
      this.initialize()
      this.createMobile()
    },
    data () {
      return {
        options: [],
        show: false,
        selectValue: '',
        selectLabel: ''
      }
    }
  }
</script>