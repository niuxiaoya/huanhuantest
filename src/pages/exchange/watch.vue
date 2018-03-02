<template>
  <rs-layout>
    <rs-search>
      <div class="form-item">
        <div class="label">标题</div>
        <input type="text" placeholder="请输入" @keyup.enter="model.search()">
      </div>
    </rs-search>

    <rs-list
      :model="model"
      :tools="{pos: 0, item: {label: '审核', event: 'rs-list-watchCheck'}}"></rs-list>

    <template slot="form-item" v-if="$root.form">
      <div v-if="$root.form && $root.form.slotName === 'check'">
        <div class="form-item">
          <div class="label">审核tab</div>
        </div>
      </div>
      <div v-else>
        <div class="form-item">
          <div>非审核表单</div>
          <div class="label">标题</div>
          <input type="text" placeholder="请输入" v-model="$root.form.title">
        </div>
      </div>
    </template>
  </rs-layout>
</template>

<script>
  export default {
    data () {
      return {
        model: {
          rsList: {data:[], current:1, pages: 1, totals: 1, loading: false},           //  列表
          rsSearch: {},                                                                //  搜索
          search: () => {},
          reset: () => {},
          getList: () => {},
          check: () => {
            console.log('审核成功、失败')
          }
        }
      }
    },
    mounted () {
      /** 除编辑、删除、查看 额外有个审核的按钮时 */
      this.$root.eventHub.$on('rs-list-watchCheck', (data) => {
        data.slotName = 'check'
        data.formBtns = [
          {
            label: '审核成功',
            handle: () => {
              this.model.check()
            }
          },
          {
            label: '审核失败',
            handle: () => {
              this.model.check()
            }
          }
        ]
        this.$root.eventHub.$emit('rs-add-tab', data)
      })
    }
  }
</script>
