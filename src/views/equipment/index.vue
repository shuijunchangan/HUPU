<template>
  <div class="index">
    <BScroll>
      <div class="indexCon">
        <Select/>
        <Tab/>
        <Banner/>
        <Bgarea/>
        <List/>
      </div>
    </BScroll>
  </div>
</template>
<script>
import Select from "../../components/equipment/select/select";
import Tab from "../../components/equipment/Tab/tab";
import Banner from "../../components/equipment/Modular/basketball";
import List from "../../components/equipment/List/list";
import Bgarea from "../../components/bg/bg-area";
export default {
  components: {
    Select,
    Tab,
    Banner,
    List,
    Bgarea
  }
};
</script>
<style>
.index {
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-bottom: 0.9rem;
  height: 100%;
}
.indexCon {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>