<template>
<div >
  <div class="list-second" v-for="(item,index) in info">
    <img
      class="t-img"
      :src="item.data.href"
      alt
    >
    <div class="text">
      <h2>{{item.data.title}}</h2>
      <h3>
        <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png">斯凯男袜新款纯色，简约短筒袜，运动袜三对装<img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png">
      </h3>
      <div class="bottom">
        <div class="left">
          {{merchant}}
          <span>￥{{price}}</span>
        </div>
        <div class="right">
          <img src="//sh1.hoopchina.com.cn/images/trademobile/look.png" alt>
          <span class="watcher" flag="false">8502851</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
  data:{
    flag:true
  },
  created() {
    this.$store.dispatch('Index/getIndexActions');

  },
  computed: {
    ...Vuex.mapState({
      info:state=>state.Index.data
    })
  },
}
</script>


<style scoped lang="scss">
.list-second {
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
    height: 2.2509rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: .28rem;
      color: #333;
      word-break: break-all;
    }
    h3 {
      color: #666;
      font-size: .24rem;
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
      font-size: .28rem;
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