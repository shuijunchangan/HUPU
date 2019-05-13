<template>
  <div class="index">
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
    <div class="banner"></div>
    <div class="pic_banner">
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
      <div class="list">
        <div class="text">
          <h2>篮球</h2>
          <p>纯白系列秒杀</p>
        </div>
        <img
          src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
          alt
        >
      </div>
    </div>
    <div class="hot">
      <div class="sale">
        <h2>今日优惠</h2>
        <p>EQT 5折好价</p>
        <img
          src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
          alt
        >
      </div>
      <div class="sale">
        <h2>今日优惠</h2>
        <p>EQT 5折好价</p>
        <img
          src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
          alt
        >
      </div>
      <div class="sale">
        <h2>今日优惠</h2>
        <p>EQT 5折好价</p>
        <img
          src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
          alt
        >
      </div>
    </div>
    <HotActive/>
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
        <div class="list-top">
          <img
            class="t-img"
            src="http://shihuo.hupucdn.com/article/2019-03-27/032b2c21edb258d2c953e67d2f50a179.jpg?imageView2/0/w/600/h/600/interlace/1"
            alt
          >
          <div class="text">
            <h2>这双Air Max 97凭什么让陈冠希连连称赞</h2>
            <div class="person">
              <img src="http://shihuo.hupucdn.com/153308972510911.jpg" alt>
              <h3>保罗皮尔斯凯文加内特</h3>
            </div>
            <div class="bottom">潮鞋志</div>
          </div>
        </div>

       <Listsecond/>

        <div class="list-sale">
          <h2>今日优惠</h2>
          <div class="pic">
            <img
              src="http://shihuo.hupucdn.com/newsIndex11/201903/3014/3625b5ceb8fe1e0c1c4b0f648257ba4d.png?imageView2/0/w/600/h/600/interlace/1"
              alt
            >
            <img
              src="http://shihuo.hupucdn.com/newsIndex11/201903/3014/3625b5ceb8fe1e0c1c4b0f648257ba4d.png?imageView2/0/w/600/h/600/interlace/1"
              alt
            >
            <img
              src="http://shihuo.hupucdn.com/newsIndex11/201903/3014/3625b5ceb8fe1e0c1c4b0f648257ba4d.png?imageView2/0/w/600/h/600/interlace/1"
              alt
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "first",
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  width: 100%;
  .search_bar {
    display: flex;
    height: 0.92026rem;
    width: 100%;
    position: absolute;
    top: 0;
    align-items: center;
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
    background: #000;
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
    div {
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
        font-size: 14px;
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
          font-size: 12px;
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
      padding: 0.20011rem 0.20011rem 0;
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
            font-size: 14px;
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
              font-size: 12px;
              color: #666;
            }
          }
          .bottom {
            color: #999;
            font-size: 10px;
            border: 1px solid #a8a8a8;
            border-radius: 0.08rem;
            padding: 0 0.13333rem;
            width: 0.91rem;
          }
        }
      }
      
      .list-sale {
        height: 2.66112rem;
        margin: 0.1rem 0;
        padding-left: 0.20011rem;
        h2 {
          font-size: 12px;
          color: #666;
        }
        .pic {
          display: flex;
          justify-content: space-around;
          img {
            width: 2.30113rem;
            height: 2.30113rem;
          }
        }
      }
    }
  }
}
</style>
