<template>
  <div id="app">
      <Top></Top>
      <router-view></router-view>
      <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "./src/components/Bottom";
import Top from "./src/components/Top";

export default {
  name: 'App',
  components: {
      Top,
      Bottom
  }
}
</script>

<style>
@import "src/assets/styles/splendidcat.css";
</style>