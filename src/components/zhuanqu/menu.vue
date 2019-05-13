<template>
  <div class="menu">
    <ul class="m-ul">
      <li class="m-li">
        <img class="tall" src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiuxie2.png">
        <p>篮球鞋</p>
      </li>
      <li class="m-li">
        <img class="tall" src="http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png">
        <p>篮球上装</p>
      </li>
      <li class="m-li">
        <img class="tall" src="http://sh1.hoopchina.com.cn/images/trade/app/qiuku2.png">
        <p>篮球下装</p>
      </li>
      <li class="m-li">
        <img class="tall" src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiuhuju1.png">
        <p>篮球配件</p>
      </li>
      <li class="m-li">
        <img class="tall" src="http://sh1.hoopchina.com.cn/images/trade/app/lanqiu2.png">
        <p>篮球</p>
      </li>
      <li class="m-li not-tall">
        <img class="short" src="http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png">
        <h2>Jordan</h2>
      </li>
      <li class="m-li not-tall">
        <img class="short" src="http://sh1.hoopchina.com.cn/images/trade/app/adidas.png">
        <h2>adidas</h2>
      </li>
      <li class="m-li not-tall">
        <img class="short" src="http://sh1.hoopchina.com.cn/images/trade/app/nike1.png">
        <h2>Nike</h2>
      </li>
      <li class="m-li not-tall">
        <img class="short" src="http://sh1.hoopchina.com.cn/images/trade/app/ua.png">
        <h2>UA</h2>
      </li>
      <li class="m-li not-tall">
        <img class="short" src="http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png">
        <p>全部</p>
      </li>
    </ul>
    <div class="hot">
      <div class="scroll">
        <a class="left" href="javascript:;">球鞋百科知多少</a>
        <a href="javascript:;">AJ潮流效应</a>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
    
      .menu {
        background: #fff;
        padding: 0 0.15008rem;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 0.2rem;
        .m-ul {
          display: flex;
          flex-wrap: wrap;
          .m-li {
            display: flex;
            height: 1.6rem;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0.15008rem 0;
            border-bottom: 1px solid #f0f3f5;
            font-family: Helvetica Neue, Helvetica, serif !important;
            .tall {
              display: block;
              width: 1.44rem;
              height: 0.86438rem;
              margin-bottom: 0.1rem;
            }
            .short {
              display: block;
              width: 1.44rem;
              height: 0.72037rem;
              margin-bottom: 0.1rem;
            }
            h2 {
              font-weight: 900;
              font-size: .24rem;
            }
          }
          .not-tall {
            height: 1.4864rem;
            padding: 0.16rem 0;
          }
        }
        .hot {
          background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/index/hottest_32eac13.jpg)
            0.15rem center no-repeat;
          background-size: 1.7rem 0.39999rem;
          height: 0.8rem;
          padding-left: 1.80096rem;
          .scroll {
            height: 0.8rem;
            width: 5.4031rem;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #333;
              font-size: .28rem;
              font-family: Helvetica Neue, Helvetica, serif !important;
            }
            .left {
              border-right: 1px solid #e6e6e6;
            }
          }
        }
      }
</style>