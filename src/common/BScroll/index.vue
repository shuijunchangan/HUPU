<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
    });
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 7.5rem;
}
</style>