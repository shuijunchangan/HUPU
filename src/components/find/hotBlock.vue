<template>
  <div class="hotBlock">
    <div class="title">热门话题</div>
    <div class="swiper-container dou">
      <div class="swiper-wrapper dou1">
        <div class="swiper-slide ss">
          <div class="swip1">
            <a class="swip1a">
              <div class="img">
                <img
                  src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                >
              </div>
              <div class="p">
                <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
              </div>
            </a>
          </div>
          <div class="swip1">
            <a class="swip1a">
              <div class="img">
                <img
                  src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg"
                >
              </div>
              <div class="p">
                <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
              </div>
            </a>
          </div>
          <div class="swip1">
            <a class="swip1a">
              <div class="img">
                <img
                  src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png"
                >
              </div>
              <div class="p">
                <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
              </div>
            </a>
          </div>
         
        </div>
 <div class="swip2">
            查看更多<img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-arrow_7dcc7b2.png">
              
            
            
          </div>
        <!-- <div class="swiper-slide s2">slider2</div>
        <div class="swiper-slide s3">slider3</div>-->
        <!-- <div class="swiper-slide aas"> -->

        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<!-- <script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "swiper/dist/js/swiper.js";
import Vuex from 'vuex';
window.onload = function() {
  var mySwiper = new Swiper(".swiper-container", {
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 2,
    freeModeSticky: true,
    freeModeMinimumVelocity: 100,
    resistance: false
  });
};
export default {
};
</script>-->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.dou {
  width: 120%;
  display: flex;
  position: relative;
  left: -0.5rem;
}
.dou1 {
  width: 100%;
  display: flex;
  position: relative;
  left: 0.5rem;
}
.ss {
  width: 7.5rem !important;
  height: 1.6rem;
  //   background: #4390ee;
  display: flex;
  margin-left: 0.2rem;
}
.aas {
  width: 1rem !important;
  .swip2 {
    width: 1rem;
    height:1rem;
    display: flex;
    flex-direction: row;
    background: pink;
  }
}
.swiper-slide {
  width: 9rem;
  line-height: 1.2398rem;
  color: #fff;
  font-size: 0.36rem;
  text-align: center;
}
.hotBlock {
  width: 100%;
  height: 2.3698rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  .title {
    height: 0.82rem;
    width: 100%;
    padding: 0.2rem;
    font-size: 0.28rem;
    color: #222;
  }
  .swip1 {
    width: 7.8885rem;
    height: 1.2398rem;
    display: flex;
    //   overflow: hidden;
    position: relative;
    .swip1a {
      width: 2.5rem;
      height: 1.2398rem;
      //   background: chartreuse;
      //   margin-right: 6px;
      // padding: 0 0.2rem 0 0.2rem;
      .p {
        position: absolute;
        top: 0;
        height: 0.5rem;
      }
      .img {
        width: 2.5rem;
        height: 1.2398rem;
        overflow: hidden;
        display: flex;
        img {
          display: block;
          width: 2.5695rem;
          height: 2.5695rem;
        }
      }
    }
  }
}
</style>