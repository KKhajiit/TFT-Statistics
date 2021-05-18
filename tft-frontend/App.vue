<template>
  <div id="app">
      <Top></Top>
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