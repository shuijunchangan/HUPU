<template>
  <div class="teb">
    <ul class="tabCon">
      <li class="tabLi">
        <a href="javascript:;" class="tabA">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png"
            class="tabImgH"
          >
          <!-- <br> -->
          <span class="tabSpan">热销排行</span>
        </a>
      </li>
      <li class="tabLi">
        <a href="javascript:;" class="tabA">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png"
            class="tabImgP"
          >
          <!-- <br> -->
          <span class="tabSpan">好价精选</span>
        </a>
      </li>
      <li class="tabLi li3">
        <a href="javascript:;" class="tabA">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png"
            class="tabImg"
          >
          <!-- <br> -->
          <span class="tabSpan">当季新款</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: [
        {
          url:
            "http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png",
          name: "热销排行",
          id: 1 + ""
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png",
          name: "好价精选",
          id: 2 + ""
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png",
          name: "当季新款",
          id: 3 + ""
        }
      ]
    };
  }
};
</script>
<style>
.tabCon {
  width: 100%;
  height: 1.5097rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 10px; */
}
.tabLi {
  width: 2.4997rem;
  height: 0.95rem;
  border-right: 1px solid #d4d4d4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.li3 {
  border-right: none;
}
.tabA {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  color: #333;
}
.tabImg {
  width: 0.43rem;
  height: 0.39rem;

  margin-bottom: 10px;
}
.tabImgP {
  width: 0.4rem;
  height: 0.45rem;
  margin-bottom: 10px;
}
.tabImgH {
  width: 0.8rem;
  height: 0.42rem;
  margin-left: 12px;
  margin-bottom: 10px;
}
</style>
