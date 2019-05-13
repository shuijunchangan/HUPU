<template>
  <div class="swiper-container banner" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="items in banner">
        <a :href="items.href">
          <img :src="items.img">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "find",

  mounted() {
    new Swiper(this.$refs.banner, {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  computed: {
    ...Vuex.mapState({
      banner: state => state.Find.banner
    })
  }
};
</script>


<style scoped lang="scss">
.banner {
  height: 2.68rem;
  z-index: 90 !important;
  a {
    display: block;
    width: 7.5rem;
    height: 2.68rem;
    z-index: 90 !important;
    img {
      width: 7.5rem;
      height: 2.68rem;
      z-index: 90 !important;
    }
  }
  .swiper-pagination {
    text-align: right;
    padding-right: 0.2rem;
    z-index: 91 !important;
  }
}
</style>
