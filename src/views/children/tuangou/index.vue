<template>
  <div class="index">
    <Head :v-bind:head="this.head"/>
    <div id="con">
      <div class="con">
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
        <div class="titpic">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/titpic_5b9093a.png"
            alt
          >
        </div>
        <div class="imgBlock">
          <div class="left">
            <h2>镇团之宝</h2>
            <p>Adidas/阿迪 Harden Vol.1 CNY哈登实战篮球鞋 AH2116</p>
            <div class="price">
              <span class="kill">￥569</span>
              <span class="zhe">4.1折</span>
            </div>
            <img
              src="http://shihuo.hupucdn.com/FjZs0bme57IwmMEqNe4oXx3azyVI?imageView2/1/w/330/h/330"
            >
          </div>
          <div class="right">
            <a href="http://t.shihuo.cn/563.html#qk=topic&order=1">
              <img
                src="http://shihuo.hupucdn.com/tuangoufocusm/201901/0817/90014d2ada90c0feb523d59be73feab1.jpg"
              >
            </a>
            <div class="bottom">
              <a
                href="https://www.amazon.cn/b/ref=as_li_ss_tl?_encoding=UTF8&camp=536&creative=3132&linkCode=ur2&node=1986250071&tag=shihuo-23#qk=topic&order=2"
              >
                <img
                  src="http://shihuo.hupucdn.com/tuangoufocusm/201903/1214/269a01b84aa428c54dc26cd5c65ab0dc.png"
                >
              </a>
              <a
                href="https://www.amazon.cn/b/ref=as_li_ss_tl?_encoding=UTF8&camp=536&creative=3132&linkCode=ur2&node=1994347071&tag=shihuo-23#qk=topic&order=3"
              >
                <img
                  src="http://shihuo.hupucdn.com/tuangoufocusm/201903/1214/52341068953dfbd888632eaccb81adc0.png"
                >
              </a>
            </div>
          </div>
        </div>
        <div class="top_menu">
          <ul>
            <li>
              品牌
              <span></span>
            </li>
            <li>
              分类
              <span></span>
            </li>
            <li>
              排序
              <span></span>
            </li>
            <li>
              适用人群
              <span></span>
            </li>
            <li>
              下期预告
              <div></div>
            </li>
          </ul>
        </div>
        <div class="list_box">
          <div class="box" v-for="item in info">
            <a :href="item.url">
              <img :src="item.img_path">
              <div class="txt">
                <h2>{{item.title}}</h2>
                <div class="price">
                  <span class="zhe">{{item.discount}}折</span>
                  <div class="right">
                    <span class="oP">￥{{item.original_price}}</span>
                    <span class="nP">￥{{item.price}}</span>
                  </div>
                </div>
                <p class="num">
                  已关注人数
                  <span>{{item.attend_count}}</span>
                </p>
              </div>
            </a>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      banner: [
        {
          href: "http://t.shihuo.cn/557.html#qk=banner&order=5",
          img:
            "http://shihuo.hupucdn.com/tuangouIndexm/201904/0315/dbe0ee02cfcd408441b8d83d136e3a33.png"
        },
        {
          href:
            "http://t.shihuo.cn/642.html?shihuo_special_test=1#qk=banner&order=1",
          img:
            "http://shihuo.hupucdn.com/tuangouIndexm/201904/0910/fd2c6164dde20bd64b80e2cff0be3ebf.jpg"
        },
        {
          href:
            "http://t.shihuo.cn/636.html?shihuo_special_test=1#qk=banner&order=2",
          img:
            "http://shihuo.hupucdn.com/tuangouIndexm/201904/0418/433554662e9b48e110bce780cd82f0ae.png"
        },
        {
          href:
            "https://www.amazon.cn/b/ref=as_li_ss_tl?_encoding=UTF8&camp=536&creative=3132&linkCode=ur2&node=1992452071&tag=shihuo-23#qk=banner&order=3",
          img:
            "http://shihuo.hupucdn.com/tuangouIndexm/201903/1214/ba9b2fb1bc38ef913fb89864efd87439.png"
        },
        {
          href: "http://t.shihuo.cn/m/640.html#qk=banner&order=4",
          img:
            "http://shihuo.hupucdn.com/tuangouIndexm/201904/0910/15a905bd00591b55f1d3dd74cac7f902.png"
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("Tuangou/getTuangouActions");
    console.log(info);
  },
  computed: {
    ...Vuex.mapState({
      info: state => state.Tuangou.data
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
  display: flex;
  flex-direction: column;
  #con {
    padding-top: 0.95rem;
    display: flex;
    flex: 1;
    overflow: auto;
    .con {
      width: 100%;
      display: flex;
      flex-direction: column;
      .banner {
        height: 2.7014rem;
        width: 100%;
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
      .titpic {
        height: 0.63626rem;
        border-bottom: 1px solid #e6e6e6;
        img {
          height: 0.54024rem;
        }
      }
      .imgBlock {
        display: flex;
        height: 4.922rem;
        margin-bottom: 10px;
        border-bottom: 1px solid #e6e6e6;
        .left {
          padding-top: 0.3rem;
          width: 45%;
          background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/bgpic_2c0f12c.png);
          display: flex;
          flex-direction: column;
          align-items: center;
          background-size: 3%;
          h2 {
            font-size: 0.32rem;
            line-height: 0.3rem;
            color: #ff4338;
            font-weight: 900;
            padding: 0.1rem 0;
          }
          p {
            width: 100%;
            font-size: 0.28rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 5px;
            font-family: Helvetica, sans-serif;
          }
          .price {
            padding: 0.05rem 0;
            margin: 8px 0;
            color: #ff4338;
            .kill {
              font-size: 0.32rem;
              font-weight: bolder;
              font-family: Helvetica, sans-serif;
            }
            .zhe {
              border: 1px solid #ff4338;
              padding: 0 4px;
              border-radius: 4px;
              vertical-align: text-bottom;
              font-size: 0.22rem;
              margin-left: 5px;
            }
          }
          img {
            margin-top: 5px;
            height: 1.68824rem;
            width: 1.68824rem;
          }
        }
        .right {
          width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          img {
            border-left: 1px solid #e6e6e6;
          }
          a {
            img {
              width: 4.107rem;
              height: 2.7625rem;
            }
          }
          .bottom {
            display: flex;
            border-top: 1px solid #e6e6e6;
            img {
              width: 2.0435rem;
              height: 2.0435rem;
            }
          }
        }
      }
      .top_menu {
        height: 0.96rem;
        background: #fff;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 0.2rem;
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          li:nth-child(5) {
            border: none;
          }
          li {
            justify-content: center;
            display: flex;
            align-items: center;
            height: 0.48rem;
            line-height: 0.48rem;
            border-right: 1px solid #e8e8e8;
            font-size: 0.28rem;
            padding: 0 0.11rem;
            span {
              background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/menu_up_616fa17.png)
                center center no-repeat;
              width: 0.33976rem;
              height: 0.368rem;
              display: inline-block;
            }
            div {
              background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/yg_b1e971d.png)
                center no-repeat;
              background-size: 70% auto;
              width: 50px;
              height: 100%;
            }
          }
        }
      }
      .list_box {
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        a {
          color: #444;
        }
        .box {
          background: #fff;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
          width: 3.452rem;
          height: 5.648rem;
          margin-bottom: 0.2rem;
          img {
            width: 3.452rem;
            height: 3.452rem;
            margin-bottom: 5px;
          }
          .txt {
            padding: 0 0.2rem;
            h2 {
              font-size: 0.28rem;
              overflow: hidden;
              height: 0.75rem;
              width: 100%;
            }
            .price {
              display: flex;
              justify-content: space-between;
              margin: 5px 0;
              .zhe {
                display: flex;
                align-items: center;
                background: #ff4338;
                padding: 2px 5px;
                color: #fff;
                border-radius: 10px;
              }
              .right {
                .oP {
                  color: #b4b4b4;
                  text-decoration: line-through;
                  margin-right: 10px;
                }
                .nP {
                  font-size: 0.32rem;
                  color: #ff4338;
                  font-weight: bold;
                }
              }
            }
            .num {
              padding-top: 0.2rem;
              margin-top: 0.2rem;
              height: 0.3rem;
              line-height: 0.3rem;
              border-top: 1px solid #e6e6e6;
              color: #999;
              text-align: right;
              font-size: 0.26rem;
            }
          }
        }
      }
    }
  }
}
</style>
