<!-- 商务合作 -->
<template>
  <main class="i-corp">
    <section class="i-section i-corp__section1">
      <h2 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="250ms">请填写以下信息，我们会尽快与您取得联系。</h2>
      <p class="p2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="350ms">
        公司愿与钢琴制造、销售、培训等业界同仁携手合作，迎接消费升级背景下的时代发展机会，一起开拓钢琴教育、
        娱乐和租售等相关市场。请填写以下信息，我们会尽快与您取得联系。
      </p>
      <i-form ref="form" :model="cooperator" :rules="rules">
        <i-form-item label="公司名" :duration="2000" :delay="750" prop="companyName">
          <i-input v-model="cooperator.companyName" ref="companyName"></i-input>
        </i-form-item>
        <i-form-item label="类型" :duration="2000" :delay="1000" prop="companyType">
          <i-select class="i-form__input" ref="companyType" v-model="cooperator.companyType">
            <i-option
              v-for="(option, index) in options"
              :key="index"
              :value="option.value"
              :label="option.label">
            </i-option>
          </i-select>
        </i-form-item>
        <i-form-item label="姓名" :duration="2000" :delay="1250" prop="name">
          <i-input v-model="cooperator.name" ref="name"></i-input>
        </i-form-item>
        <i-form-item label="邮箱" :duration="2000" :delay="1500" prop="email">
          <i-input v-model="cooperator.email" ref="email"></i-input>
        </i-form-item>
        <i-form-item label="电话" :duration="2000" :delay="1750" prop="phoneNumber">
          <i-input v-model="cooperator.phoneNumber" ref="phoneNumber"></i-input>
        </i-form-item>
        <div class="i-form__item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.75s">
          <p class="p3">我们非常重视您的隐私，只会将以上信息用于收集时所说明的目的或符合法律规定的其他一致目的。</p>
        </div>
        <button class="i-form__button b wow fadeInUp" type="button"
                data-wow-duration="2s" data-wow-delay="2s" @click="submitForm('form')"></button>
      </i-form>
    </section>
  </main>
</template>

<script>
  import IForm from '../components/Form.vue'
  import IFormItem from '../components/FormItem.vue'
  import ISelect from '../components/Select.vue'
  import IOption from '../components/Option.vue'
  import IInput from '../components/Input.vue'
  import { mapActions } from 'vuex'
  import { wowMixin } from '../client/mixins'
  import cooperStoreModule from '../store/server/cooperation'

  export default {
    name: 'Corp',
    components: {
      IForm,
      IFormItem,
      ISelect,
      IOption,
      IInput
    },
    mixins: [wowMixin],
    computed: {
      options () {
        return this.$store.state.options
      }
    },
    methods: {
      ...mapActions([
        'postCooperator',
        'setErrMsg',
        'setResMsg'
      ]),
      encode () {
        let cooperator = Object.assign({}, this.cooperator)
        Object.keys(cooperator).forEach(key => {
          cooperator[key] = encodeURIComponent(cooperator[key])
        })
        return cooperator
      },
      submitForm (refForm) {
        // 执行表单验证
        if (this.$refs[refForm].valid) {
          this.postCooperator(this.cooperator)
        }
      }
    },
    title () {
      return '琴伴 | 商务合作'
    },
    asyncData ({ store }) {
      store.registerModule('cooper', cooperStoreModule)
    },
    destroyed () {
      this.$store.unregisterModule('cooper')
    },
    data () {
      return {
        cooperator: {
          name: '',
          companyName: '',
          companyType: 1,
          email: '',
          phoneNumber: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          companyType: [
            { required: true, type: 'number', message: '请选择公司类型', trigger: 'change' }
          ],
          companyName: [
            { required: true, message: '请输入公司名', trigger: 'blur' },
            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
          ],
          email: [
            { type: 'email', required: true, message: '请输入正确格式的邮箱', trigger: 'blur' }
          ],
          phoneNumber: [
            { required: true, message: '请输入电话', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>