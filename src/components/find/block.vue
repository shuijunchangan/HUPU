<template>
  <div class="bigfindBlock">
    <div class="findBlock">
      <a href="javascript:;">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png"
        >
        <span>众测</span>
      </a>
      <a href="javascript:;">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png"
        >
        <span>栏目</span>
      </a>
      <a href="javascript:;">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png"
        >
        <span>更新</span>
      </a>
      <a href="javascript:;">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png"
        >
        <span>最热</span>
      </a>
    </div>
    <Bg/>
  </div>
</template>
<script>
import Bg from "../bg/bg-area";
export default {
  components: {
    Bg
  }
};
</script>

<style scoped lang='scss'>
.findBlock {
  width: 7.5rem;
  height: 1.41rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // margin-bottom: .2rem;
  a {
    width: 1.875rem;
    height: 1.41rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #666;
    font-size: 0.24rem;
    img {
      width: 0.73037rem;
      height: 0.62025rem;
      margin-top: 0.15rem;
    }
    span {
      margin-bottom: 0.08rem;
    }
  }
}
</style>
