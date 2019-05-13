

<template>
  <div>
    <h2 class="new">最新推荐</h2>
    <div class="list-second" v-for="(items,index) in infoList">
      <img class="t-img" :src="items.data.img" alt>
      <div class="text">
        <h2>{{items.data.title}}</h2>
        <h3>
          <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png">
          {{items.data.intro}}
          <img
            src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
          >
        </h3>
        <div class="bottom">
          <div class="left">
            {{items.data.merchant}}
            <span>￥{{items.data.price}}</span>
          </div>
          <div class="right">
            <img src="//sh1.hoopchina.com.cn/images/trademobile/look.png" alt>
            <span class="watcher" flag="false">{{items.data.hits}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...Vuex.mapState({
      infoList: state => state.Equipment.infoList
    })
  },
  created() {
    this.$store.dispatch("Equipment/getInfo");
  }
};
</script>
<style scoped lang="scss">
.new {
  padding-left: 0.55rem;
  margin-top: 0.2rem;
  font-size: 0.32rem;
  background: #fff;
}
.list-second {
  background: #fff;
  height: 2.66112rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.20011rem 0;
  .t-img {
    width: 2.13113rem;
    height: 2.13113rem;
    margin-right: 0.20011rem;
    padding-left: 0.1rem;
  }
  .text {
    width: 100%;
    height: 2.2509rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 0.3rem;
    h2 {
      font-size: 0.28rem;
      color: #333;
      word-break: break-all;
    }
    h3 {
      color: #666;
      font-size: 0.24rem;
      img {
        display: inline-block;
        margin: 0 0.10005rem;
        width: 0.18rem;
        height: 0.18rem;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      font-size: 0.28rem;
      .left {
        span {
          color: #ff4338;
          font-weight: 900;
          font-family: "微软雅黑";
        }
      }
      .right {
        display: flex;
        font-family: Helvetica Neue, Helvetica, serif !important;
        img {
          width: 0.25012rem;
          height: 0.19rem;
          margin-right: 0.1rem;
          margin-top: 0.055rem;
        }
      }
    }
  }
}
</style>