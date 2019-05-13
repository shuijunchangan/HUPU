<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar v-if="this.$route.meta.tabBarflag"/>
  </div>
</template>

<script>
import Tabbar from "@/common/tabbar";
export default {
  name: "app",
  components: {
    Tabbar
  }
};
</script>

<style lang="scss">
#app{
  height: 100%;
}
</style>
