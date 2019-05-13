<template>
  <div class="hot-activity">
    <h2>热门活动</h2>
    <div class="box">
      <div class="con" v-for="item in this.active">
        <a :href="item.href">
          <div class="img">
            <img :src="item.img" alt>
          </div>
          <h3>{{item.biaoti}}</h3>
          <p>{{item.miaoshu}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    active: {
      type: Array,
      default: {}
    }
  },
  created() {}
};
</script>


<style lang="scss">
.hot-activity {
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.11006rem;
  h2 {
    font-size: 0.28rem;
    margin-bottom: 0.10005rem;
    padding: 0.20011rem 0.3rem;
    font-weight: bold;
    color: #444;
  }
  .box {
    padding: 0 0.30016rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .con {
      margin-bottom: 0.25013rem;
      width: 2.24087rem;
      .img {
        width: 2.24087rem;
        height: 1.34063rem;
        overflow: hidden;
        margin-bottom: 0.10005rem;
        img {
          width: 100%;
        }
      }
      h3 {
        color: #444;
        font-size: 0.24rem;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        width: 100%;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.24rem;
        line-height: 0.4rem;
      }
    }
  }
}
</style>