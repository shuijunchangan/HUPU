<template>
  <div class="bigModular">
    <div class="Modular" v-for="(items,index) in info">
      <div class="banner">
        <div class="imgbg">
          <img :src="items.bgimg">
        </div>
        <div class="bannerCon"></div>
        <div class="h2">
          {{items.name}}{{items.ename}}
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
          >
        </div>
        <div class="bannerSpan">{{items.bannerSpan}}</div>
        <div class="banner1 bannerLeft">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
          >
        </div>
        <div class="banner1 bannerRight">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
          >
        </div>
        <div class="hexagon" v-if="items.hexagon">
          <div class="boxF" v-for="pics in items.hexagon">
            <div class="boxS">
              <div class="boxT bg-loding-img-s">
                <img :src="pics">
              </div>
            </div>
          </div>
        </div>
        
    </div>
    <div class="tag">
          <div class="tagCon">
            <a href="javascript:;" v-for="(listk,listIndex) in items.kind" class="tagA">
              {{listk}}
              <img
                v-show="listIndex==items.kind.length-1"
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
              >
            </a>
          </div>
          <div class="tagCon" v-if="items.brand">
            <a href="javascript:;" v-for="(listb,listIndex) in items.brand" class="tagA">
              {{listb}}
              <img
                v-show="listIndex==items.brand.length-1"
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
              >
            </a>
          </div>
        </div>
        <Bgarea v-show="index<info.length-1"/>
      </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Bgarea from "../../bg/bg-area";
export default {
  data() {
    return {
      info: []
    };
  },
  computed: {
    ...Vuex.mapState({
      Modulars: state => state.Equipment.Modular
    })
  },
  created() {
    let datas = this.$store.state.Equipment.Modular;
    this.info = datas;
  },
  components: {
    Bgarea
  }
};
</script>
<style lang='scss'>
.Modular {
  // min-height: 5.4rem;
  width: 100%;
  background: #fff;
}
.banner {
  width: 100%;
  height: 3.9rem;
  /* background: pink; */
  //   background-image: url("http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1");
  position: relative;
}
.bannerCon {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  padding-top: 0.4rem;
  /* float: left; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgbg {
  width: 100%;
  height: 0;
  img {
    width: 100%;
    height: 3.9rem;
  }
}
.h2 {
  width: 100%;
  height: 0.75rem;
  font-size: 0.5rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.4rem;
  img {
    width: 0.44rem;
    height: 0.44rem;
    margin-left: 5px;
  }
}

.bannerSpan {
  width: 100%;
  height: 0.42rem;
  color: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 0.28rem;
  position: absolute;
  top: 1.15rem;
}
.banner1 {
  width: 0.33rem;
  height: 2.5rem;
  position: absolute;
  top: 0.65rem;
}
.banner1 > img {
  width: 0.33rem;
  height: 2.5rem;
}
.bannerRight {
  right: 0.53333rem;
}
.bannerLeft {
  left: 0.53333rem;
}
.hexagon {
  display: flex;
  justify-content: space-between;
  // float: left;
  width: 5.3rem;
  height: 1.6rem;
  position: absolute;
  top: 2rem;
  left: 1.1rem;
  .boxF {
    width: 1.2rem;
    height: 1.6rem;
    -webkit-transform: rotate(120deg);
    visibility: hidden;
    display: inline-block;
    overflow: hidden;
    //   margin-right: 0 0.06667rem;
    //   position: absolute;
    margin-top: 0.2rem;
    //   margin-left:.6rem;
    .boxS {
      width: 1.2rem;
      height: 1.6rem;
      -webkit-transform: rotate(-60deg);
      visibility: hidden;
      display: inline-block;
      overflow: hidden;
      .bg-loding-img-s {
        width: 1.2rem;
        height: 1.6rem;
        background: no-repeat center center;
        background-size: 100%;
        background-color: #fff;
        -webkit-transform: rotate(-60deg);
        visibility: visible;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
}

.tag {
  //   height: 1.8594rem;
  width: 100%;
  /* margin-bottom: 0.2rem */
}
.tagCon {
  height: 0.9297rem;
  width: 100%;
  /* background: pink; */
  display: flex;
}
.tagA {
  width: 1.875rem;
  font-size: 0.26rem;
  color: #444;
  border-bottom: 1px #ececec solid;
  border-right: 1px #ececec solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tagA > img {
  margin-left: 0.17rem;
  width: 0.1rem;
  height: 0.17rem;
}
</style>
