<template>
  <div id="app">
    <!-- exclude="Detail"代表不缓存Detail页面 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
