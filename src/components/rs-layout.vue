<!-- 通用页面布局（搜索区、表格区、新增tab、多语言、导出数据等） -->
<template>
  <div>
    <rs-header></rs-header>
    <rs-aside></rs-aside>
    <div>

      <div>
        <ul>
          <li @click="active === 0">腕表管理列表</li>
          <li v-for="item,i in tabs" :key="i" @click="active === i+1">
            {{ item.tabTitle }}
            <span @click="$root.eventHub.$emit('rs-del-tab')">&times;</span>
          </li>
        </ul>

        <button type="button" v-if="active === 0" @change="$root.eventHub.$emit('rs-list-export')">导出</button>
        <select v-if="active === 0" @change="$root.eventHub.$emit('rs-list-lang')">
          <option value="中文">中文</option>
        </select>
      </div>

      <!-- 搜索区、表格区 -->
      <slot v-if="active === 0"></slot>

      <!-- 表单区 -->
      <form class="tab-form" v-if="active !== 0">
        <slot name="form-item"></slot>

        <div class="form-item" v-if="$root.form.formBtns">
          <button v-for="item,i in $root.form.formBtns" type="button" @click="item.handle()">
            {{ item.label }}
          </button>
        </div>
      </form>

      <button type="button" v-if="active === 0" @click="$root.eventHub.$emit('rs-add-tab')">新增tab</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0,
        tabs: []
      }
    },
    mounted () {
      /** 监听 rs-add-tab 事件，新增tab */
      this.$root.eventHub.$on('rs-add-tab', (data) => {
        data = data || {}
        data.slotName = data.slotName || 'formItem'
        data.tabTitle = data.tabTitle || '新标签'

        /** 表单提交按钮 */
        if(!data.formBtns) {
          data.formBtns = [
            {
              label: '确定',
              handle: () => {
                console.log('确定')
              }
            },
            {
              label: '取消',
              handle: () => {
                console.log('取消')
              }
            }
          ]
        }

        /** 更新要显示的表单元素 */
        this.$root.form = data || {}

        /** 保存新增加的tab */
        this.tabs.push(data)
        this.active = this.tabs.length
      })
    }
  }
</script>
