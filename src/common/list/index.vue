<template>
  <div class="list">
    <ul>
      <li class="on">推荐</li>
      <li>篮球</li>
      <li>跑步</li>
      <li>健身</li>
      <li>潮流</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list"
};
</script>

<style lang="scss">
.list {
  padding: 0 0.50027rem;
  border-bottom: 1px solid #eee;
  ul {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-items: center;
    li {
      font-size: .26rem;
      font-weight: 700;
      position: relative;
      color: #333;
    }
    .on {
      color: #ff4338;
    }
    .on:after {
      content: "";
      width: 0.35rem;
      display: block;
      position: absolute;
      bottom: -0.15rem;
      left: 60%;
      margin-left: -0.22667rem;
      height: 0.05333rem;
      background: #ff4338;
    }
  }
}
</style>