<template>
  <div class="select">
    <div class="selectLeft">
      <div class="selectCon">
        <input type="text" class="selectInput" placeholder="搜索全网低价好券">
      </div>
    </div>
    <span class="selectRight"></span>
    <!-- taoge -->
  </div>
</template>
<script>
export default {};
</script>
<style>
.select {
  height: 0.8498rem;
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectLeft {
  width: 6.75rem;
  height: 100%;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectCon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.selectInput {
  height: 0.5498rem;
  width: 5.8898rem;
  background: #ebebeb;
  font-size: 0.1rem;
  color: #666;
  font-size: 0.28rem;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-image: url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png");
  background-position: 0.133333rem center;
  background-repeat: no-repeat;
  background-size: 0.3rem;
  padding-left: 0.5rem;
}
.selectInput::placeholder {
  color: #9c9c9c;
}
.selectRight {
  flex: 1;
  height: 100%;
  /* background: yellowgreen; */
  background-image: url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png");
  background-size: 100%;
  background-position-y: 3px;
}
</style>
