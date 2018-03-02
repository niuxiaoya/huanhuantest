<!-- 页面主表格 -->
<template>
  <div>
    <table>
      <thead>
      <tr>
        <td>ID</td>
        <td>标题</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item,i in model.rsList.data" :key="i">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>
          <button v-for="t,k in tableTools" :key="k" type="button" @click="$root.eventHub.$emit(t.event, item)">{{ t.label }}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      model: Object,                                                              //  当前页面使用的模型实例对象
      tools: Object                                                               //  除增、删、改、查 额外的按钮
    },
    data () {
      return {
        tableTools: [                                                             //  列表操作栏基本按钮（方便调整顺序）
          {label: '编辑', event: 'rs-list-edit'},
          {label: '删除', event: 'rs-list-del'},
          {label: '查看', event: 'rs-list-detail'}
        ]
      }
    },
    mounted () {
      /** 检查是否有除 编辑、删除、查看 额外的按钮 */
      if(!!this.tools) {
        if(Object.prototype.toString.call(this.tools) === "[object array]") {

        }else {
          this.tableTools.splice(this.tools.pos, 0, this.tools.item)
        }
      }
      /** 页面载入获取列表 */
      this.getList()
      /** 监听 rs-get-list 事件，更新列表内容 */
      this.$root.eventHub.$on('rs-get-list', () => {
        this.getList()
      })
      /** 监听 rs-list-del 事件，更新列表内容 */
      this.$root.eventHub.$on('rs-list-del', (data) => {
        this.getList()
      })
      /** 监听 rs-list-detail 事件，更新列表内容 */
      this.$root.eventHub.$on('rs-list-detail', (data) => {
        this.getList()
      })
    },
    methods: {
      /** 更新表格数据 */
      getList() {
      //  this.model.getList()
        this.model.rsList.data = []
        for(let i=0;i<10;i++) {
          this.model.rsList.data.push({
            id: Math.floor(Math.random()*10),
            title: (Math.floor(Math.random()*10)).toString() + 'testtest'
          })
        }
      }
    }
  }
</script>
