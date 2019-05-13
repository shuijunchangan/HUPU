<template>
  <div class="top">
    <img @click="handleBack"
      src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
    >
    <h2>{{head}}</h2>
    <img
      src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
    >
  </div>
</template>

<script>
export default {
  created() {
    let {head} = this.$route.params;
    this.head = head;
    console.log(this)
  },
  data() {
    return {
      head:""
    }
  },
  props: {
    head: {
      type: String,
      default: "加载中"
    }
  },
  watch: {
    $route(to, from) {
      this.head = to.params.head;
    }
  },
  methods: {
    handleBack(){
      this.$router.back();
    }
  },
};
</script>

<style lang="scss">
.top {
  background: #f7f7f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 0.95rem;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 0.1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  h2 {
    font-size: .38rem;
    color: #333;
    font-weight: 900;
  }
  img {
    width: 0.78713rem;
    height: 0.78713rem;
  }
}
</style>