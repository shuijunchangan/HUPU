<template>
  <div class="index">
<<<<<<< HEAD
    <!-- <Loading v-show="isLoading"/> -->
    <div>
      <div class="search_bar">
        <form
          class="searchBox"
          id="searchBox"
          action="//m.shihuo.cn/search/searchResult/all"
          method="get"
        >
          <div class="search_box">
            <div class="search">
              <input id="searchVal" class="input" name="keywords" placeholder="搜索商品，品牌" type="text">
              <a href="javascript:;" class="me">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
                  alt
                >
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="swiper-container banner" ref="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="items in banner">
            <a :href="items.href">
              <img :src="items.img">
=======
    <div class="search_bar">
      <form
        class="searchBox"
        id="searchBox"
        action="//m.shihuo.cn/search/searchResult/all"
        method="get"
      >
        <div class="search_box">
          <div class="search">
            <input id="searchVal" class="input" name="keywords" placeholder="搜索商品，品牌" type="text">
            <a href="javascript:;" class="me">
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
                alt
              >
>>>>>>> parent of 16cb340... Loading
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="pic_banner">
        <router-link
          tag="div"
          :to="{name:'zhuanqu',params:{head:item.biaoti+'专区'}}"
          class="list"
          v-for="item in pic_banner"
        >
          <div class="text">
            <h2>{{item.biaoti}}</h2>
            <p>{{item.miaoshu}}</p>
          </div>
          <img :src="item.img" alt>
        </router-link>
      </div>
      <div class="hot">
        <router-link to="/sale" tag="div" class="sale">
          <h2>今日优惠</h2>
          <p>EQT 5折好价</p>
          <img
            src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
            alt
          >
        </router-link>
        <router-link class="sale" tag="div" :to="{name:'tuangou',params:{head:this.head}}">
          <h2>限时团购</h2>
          <p>春节不打烊</p>
          <img
            src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"
            alt
          >
        </router-link>
        <a class="sale" href="http://m.shihuo.cn/haitao/index#qk=haitao">
          <h2>一键海淘</h2>
          <p>卡西欧黑金249元</p>
          <img
            src="http://shihuo.hupucdn.com/appHome/201807/1310/f975458f8da63b0769796aba49271e1c.jpg?imageView2/2/w/120/h/120/interlace/1"
            alt
          >
        </a>
      </div>
      <HotActive v-bind:active="this.hot_active"/>
      <div id="listView">
        <div class="listView-top">
          <list/>
          <div class="list-menu">
            <div class="on">全部</div>
            <div>单品推荐</div>
            <div>原创精选</div>
            <div>用户晒物</div>
          </div>
        </div>
        <div class="list-view">
          <div>
            <FList/>
          </div>

          <div class="list-sale">
            <h2>今日优惠</h2>
            <div class="pic">
              <a v-for="items in youhui" :href="items.href">
                <img :src="items.img" alt>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import BScroll from "better-scroll";

export default {
  name: "first",
  data() {
    return {
<<<<<<< HEAD
      isLoading: true,
      head: "识货-团购",
=======
      head:"识货-团购",
>>>>>>> parent of 16cb340... Loading
      pic_banner: [
        {
          biaoti: "篮球",
          miaoshu: "纯白系列秒杀",
          img:
            "http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          biaoti: "跑步",
          miaoshu: "女王节秒杀",
          img:
            "http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          biaoti: "健身",
          miaoshu: "步瑞特装备秒杀",
          img:
            "http://shihuo.hupucdn.com/def/20170915/bb68abb51c246b30022b59e2a1321c7c1505460747.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          biaoti: "足球",
          miaoshu: "其实是在吹总裁",
          img:
            "http://shihuo.hupucdn.com/trade/reposition/2017-09-13/0ed11999a6797094d6cf3df6db5f7d1a.png?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          biaoti: "潮流",
          miaoshu: "78元短袖秒杀",
          img:
            "http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMVVoVUtSVlhYWFhhTVhwWFhYWFhYWFhYWF8hITItaXRlbV9waWMucG5n?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          biaoti: "数码",
          miaoshu: "大屏轻薄化",
          img:
            "http://shihuo.hupucdn.com/appZone/201803/3014/6585e2ef057af8a1e1f015b6f4cc6ce5.jpg?imageView2/0/w/160/h/160/interlace/1"
        }
      ],
      hot_active: [
        {
          href: "http://www.shihuo.cn/article/detail/18871.html",
          biaoti: "花鸟市场行",
          miaoshu: "今天穿这样",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
        },
        {
          href: "http://www.shihuo.cn/column/227.html",
          biaoti: "装备微讯",
          miaoshu: "2分钟懂你想要",
          img:
            "http://shihuo.hupucdn.com/appZone/201801/3117/dfb166bb32589d4c0c0f33613a7160cc.jpg"
        },
        {
          href: "https://m.shihuo.cn/column/245.html",
          biaoti: "热门资讯",
          miaoshu: "最新最热门的数码资讯",
          img:
            "http://shihuo.hupucdn.com/appZone/201805/1414/c5f797407c24e87cb7648abc937e9955.jpg"
        },
        {
          href: "http://t.shihuo.cn/m/538.html",
          biaoti: "独家折扣专场",
          miaoshu: "买到就是赚到！",
          img:
            "http://shihuo.hupucdn.com/appZone/201812/0411/965ca32793c9a42a11c0de32465d9a64.jpg"
        },
        {
          href: "http://www.shihuo.cn/column/137.html",
          biaoti: "跑步评测室",
          miaoshu: "最炫酷的跑步装备评测",
          img:
            "http://shihuo.hupucdn.com/appZone/201803/2617/e6ae975eca6480b86354e92fa866a8e1.jpg"
        },
        {
          href: "http://www.shihuo.cn/article/detail/21332.html",
          biaoti: "潮流折扣日Vol.53",
          miaoshu: "别再错过专属优惠了",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/2310/18c66c0697e87440978ffdc220ee7cf9.jpg"
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("Index/getIndexActions");
  },
<<<<<<< HEAD
  watch: {
    info() {
      this.isLoading = false;
    }
  },
=======
>>>>>>> parent of 16cb340... Loading
  computed: {
    ...Vuex.mapState({
      info: state => state.Index.data,
      youhui: state => state.Index.youhui,
      banner: state => state.Index.banner
    })
  },
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  height: 100%;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  width: 100%;
  .search_bar {
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.4), transparent);
    display: flex;
    height: 0.92026rem;
    width: 100%;
    position: absolute;
    top: 0;
    align-items: center;
    z-index: 10;
    .searchBox {
      // justify-content: space-between;
      display: flex;
      justify-content: space-between;
      background: rgba(221, 23, 18, 0);
      .search {
        display: flex;
        width: 6.8rem;
        padding-left: 0.26667rem;
        .input {
          width: 6.8rem;
          height: 0.6203rem;
          background: #fff
            url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png)
            0.06rem center no-repeat;
          background-size: 0.3rem;
          overflow: hidden;
          font-size: 0.25rem;
          padding-left: 0.4rem;
          border-radius: 0.053335rem;
          border: 0;
        }
        .me {
          display: flex;
          padding: 0 0.2rem;
          width: 0.25rem;
          display: flex;
          img {
            justify-content: center;
            align-items: center;
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
  }
  .banner {
    height: 3.8rem;
    width: 100%;
    // overflow: initial !important;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      text-align: right;
      padding-right: 0.2rem;
    }
  }
  .pic_banner {
    margin-top: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    .list {
      display: flex;
      border-bottom: 1px solid #f0f3f5;
      border-left: 1px solid #f0f3f5;
      padding: 0.05003rem 0.30016rem;
      width: 50%;
      height: 1.2465rem;
      justify-content: space-between;
      .text {
        // margin-top: 0.15008rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        h2 {
          font-size: 0.3rem;
          font-weight: 900;
        }
        p {
          font-size: 0.24rem;
          color: #666;
          white-space: nowrap;
        }
      }
      img {
        width: 1.0505rem;
        height: 1.0505rem;
      }
    }
  }
  .hot {
    margin: 0.06rem;
    display: flex;
    .sale {
      margin: 0.05rem;
      padding: 0.15rem 0;
      width: 2.35125rem;
      height: 2.57647rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 0.3rem;
        color: #333;
      }
      p {
        color: #666;
      }
      img {
        width: 1.20063rem;
        height: 1.20063rem;
      }
    }
  }
  #listView {
    padding-bottom: 0.9rem;
    background: #fff;
    .listView-top {
      height: 1.56075rem;
      border-bottom: 1px solid #eee;
      .list-menu {
        display: flex;
        justify-content: space-around;
        div {
          width: 1.50075rem;
          height: 0.52025rem;
          font-size: 0.24rem;
          color: #333;
          background: #f5f5f5;
          border-radius: 0.04rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .on {
          color: #fff;
          background: #ff4338;
        }
      }
    }
    .list-view {
      padding: 0 0.20011rem ;
      .list-top {
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
            font-size: 0.28rem;
            color: #333;
            word-break: break-all;
          }
          .person {
            display: flex;

            img {
              width: 0.40013rem;
              height: 0.384rem;
              border-radius: 50%;
              margin-right: 0.1rem;
            }
            h3 {
              font-size: 0.24rem;
              color: #666;
            }
          }
          .bottom {
            text-align: center;
            color: #999;
            font-size: 0.2rem;
            border: 1px solid #a8a8a8;
            border-radius: 0.32rem;
            padding: 0 0.13333rem;
            width: 1rem;
          }
        }
      }

      .list-sale {
        overflow: hidden;
        height: 2.66112rem;
        margin: 0.1rem 0;
        padding-left: 0.20011rem;
        h2 {
          font-size: 0.24rem;
          color: #666;
        }
        .pic {
          display: flex;
          justify-content: start;
          a {
            img {
              display: block;
              width: 2.30113rem;
              height: 2.30113rem;
            }
          }
        }
      }
    }
  }
}

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
      font-size: 0.24rem;
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
