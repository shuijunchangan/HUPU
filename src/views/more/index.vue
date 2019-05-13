<template>
    <div class="more">
        <Header/>
        <Content/>
    </div>
</template>
<script>
import Header from '../../components/more/header';
import Content from '../../components/more/content'
export default {
    components:{
        Header,
        Content
    }
}
</script>
<style>
.more{
    background: #fff!important;
}
</style>