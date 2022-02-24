<template>
  <div id="app">
    <!-- <user-info /> -->
    <router-view />
  </div>
</template>

<script>
import userInfo from './views/userInfo.vue'
export default {
  components: {
    userInfo,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
