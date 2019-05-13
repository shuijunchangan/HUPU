<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/index",
          icon: "&#xe68a;"
        },
        {
          title: "优惠",
          path: "/sale",
          icon: "&#xe607;"
        },
        {
          title: "发现",
          path: "/find",
          icon: "&#xe629;"
        },
        {
          title: "装备",
          path: "/equipment",
          icon: "&#xe611;"
        },
        {
          title: "更多",
          path: "/more",
          icon: "&#xe62f;"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$color: #ff4338;
#footer {
  display: flex;
  width: 100%;
  height: 0.9rem;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0.32rem 0.02667rem rgba(0, 0, 0, 0.51);
  background-color: rgba(255, 255, 255, 0.96);
  z-index: 999;
  ul {
    width: 100%;
    align-items: center;
    justify-content: space-around;
    display: flex;
    color: #444;
    font-size: 0.24rem;
    height: 100%;
    i {
      font-size: 0.4rem;
    }
    li {
      display: flex;
      height: 0.752rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .router-link-active {
      color: $color;
    }
  }
}
</style>