<template>
  <div class="index">
      <Index/>
  </div>
</template>

<script>

export default {
  components: {
      Index: require("@/components/zhuanqu/index.vue").default,
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
