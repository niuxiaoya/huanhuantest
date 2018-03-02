<!-- 列表搜索  监听 rs-list-search 事件，开始搜索 -->
<template>
  <form>
    <slot></slot>

    <button type="button" @click="$root.eventHub.$emit('rs-get-list')">查询</button>
    <button type="reset" @click="$root.eventHub.$emit('rs-get-list')">重置</button>
  </form>
</template>

<script>
  export default {
  }
</script>

<style lang="less" type="text/less" scoped>

</style>
