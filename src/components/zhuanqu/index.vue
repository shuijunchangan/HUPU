<template>
  <div class="index">
    <Head/>
    <div id="con">
      <div class="con">
        <Menu/>
        <HotActive v-bind:active="this.hot_active"/>
        <div class="want">
          <div class="w-top">
            <h2>欲望清单</h2>
            <a href="javascript:;">查看更多 ></a>
          </div>
          <ul class="box">
            <li class="b-li" v-for="item in wanted">
              <a :href="item.href">
                <img :src="item.img">
                <p>{{item.txt}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="listView">
          <List/>
          <Listsecond/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      hot_active: [
        {
          href: "http://t.shihuo.cn/463.html",
          biaoti: "95分微瑕疵专场",
          miaoshu: "低价折扣超值精选",
          img:
            "http://shihuo.hupucdn.com/appZone/201809/0121/719c179b93c6965419dec2e307de2d7e.jpg"
        },
        {
          href: "https://hupuyouxuan.taobao.com",
          biaoti: "虎扑优选精英篮球袜",
          miaoshu: "低至6.9元",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/1019/7e5b5b66171686cf805178be1c793bf0.jpg"
        },
        {
          href: "http://t.shihuo.cn/m/422.html",
          biaoti: "实战性价比之选",
          miaoshu: "球星支线",
          img:
            "http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg"
        }
      ],
      wanted: [
        {
          href: "http://m.shihuo.cn/article/detail/34298.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/201904/0820/b3403bd3f76a60236bced5b7bf3b2074.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "安踏新鞋曝光"
        },
        {
          href: "http://m.shihuo.cn/article/detail/34293.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/2019-04-08/d7f887d56c4abf43f1acdb5cf1da1dc2.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "AJ4细节曝光"
        },
        {
          href: "http://m.shihuo.cn/article/detail/32207.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/2019-03-18/fc4a77509d7176e41019fd58cf005fe0.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "NCAA公布名单"
        },
        {
          href: "http://m.shihuo.cn/article/detail/33658.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/2019-04-01/fcc766220651580deef4500b63e586be.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "郭艾伦上线"
        },
        {
          href: "http://m.shihuo.cn/article/detail/33114.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/2019-03-27/846591b630539fe87cd58d2ae7645fff.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "猛龙过江"
        },
        {
          href: "http://m.shihuo.cn/article/detail/33817.html#qk=ywqdList",
          img:
            "http://shihuo.hupucdn.com/article/201904/0318/a8160218b561a9005dd489008f6218bf.jpg?imageView2/0/w/300/h/300/interlace/1",
          txt: "回到未来"
        }
      ]
    };
  },
  components: {
    Menu: require("./menu.vue").default
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
      .want {
        width: 100%;
        background: #fff;
        padding: 0 0.15008rem;
        margin: 0.2rem 0;
        height: 3.7018rem;
        .w-top {
          display: flex;
          justify-content: space-between;
          height: 0.7504rem;
          color: #333;
          align-items: center;
          h2 {
            font-size: 0.28rem;
            font-weight: 600;
            font-family: Helvetica Neue, Helvetica, serif !important;
          }
          a {
            color: #333;
          }
        }
        .box {
          display: flex;
          overflow: auto;
          width: 100%;
          .b-li {
            display: flex;
            flex-direction: column;
            width: 1.92554rem;
            height: 2.75127rem;
            margin: 0 0.08005rem 0.20011rem 0.08005rem;
            img {
              width: 1.92563rem;
              height: 1.92563rem;
            }
            p {
              color: #333;
              font-size: 0.26rem;
            }
          }
        }
      }
      .listView {
        background: #fff;
        padding: 0 0.15008rem;
      }
    }
  }
}
</style>
