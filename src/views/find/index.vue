<template>
  <BScroll>
    <div class="find">
      <Banner/>
      <Block/>
      <HotBlock/>
      <List/>
    </div>
  </BScroll>
</template>

<script>
import Block from "@/components/find/block.vue";
import HotBlock from "@/components/find/hotBlock.vue";
import List from "@/components/find/list.vue";
import Banner from "@/components/find/banner.vue";
export default {
  name: "first",
  components: {
    Block,
    HotBlock,
    List,
    Banner
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.find {
  background: #fff !important;
  padding-bottom: 0.9rem;
}
</style>
