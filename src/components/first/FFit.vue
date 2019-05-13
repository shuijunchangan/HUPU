<template>
  <div>
    <a class="list-second" v-for="(item,index) in info" :href="item.data.href">
      <img class="t-img" :src="item.data.img" alt>
      <div class="text">
        <h2>{{item.data.title}}</h2>
        <h3>
          <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png">
          {{item.data.intro}}
          <img
            src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
          >
        </h3>
        <div class="bottom">
          <div class="left">
            {{item.data.merchant}}
            <span>￥{{item.data.price}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  created() {
    this.$store.dispatch("Index/getIndexActions");
  },
  computed: {
    ...Vuex.mapState({
      info: state => state.Index.data
    })
  }
};
</script>


<style scoped lang="scss">
.list-second {
  width: 100%;
  height: 2.66112rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.20011rem 0;
  .t-img {
    width: 2.13113rem;
    height: 2.13113rem;
    margin-right: 0.20011rem;
  }
  .text {
    width: 100%;
    height: 2.2509rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 0.28rem;
      color: #333;
      word-break: break-all;
    }
    h3 {
      font-size: 0.24rem;
      color: #666;
      img {
        width: 0.18rem;
        height: 0.18rem;
        display: inline-block;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      font-size: 0.24rem;
      .left {
        span {
          color: #ff4338;
          font-weight: 900;
          font-family: "微软雅黑";
        }
      }
    }
  }
}
</style>
