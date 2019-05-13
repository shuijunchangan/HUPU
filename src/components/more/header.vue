<template lang="">
    <div class="moreHead">
        <div class="headPortrait">
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" class='headPortraitImg'/>
        </div>
        <div class='RegAndLog'>
            <div class="moreHeadA">
            <a href="javascript:;" class='log'>登录</a>
            <a href="javascript:;" class='reg'>注册</a>
            </div>
            <p>金币 0 </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .moreHead{
        width:100%;
        height:3rem;
        // padding-top:1.4rem;
        background-image: url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png");
        display:flex;
        align-items: center;

        .RegAndLog{
            width:4.625rem;
            height: 0.90984rem;
            padding-left:0.5rem;
            margin-top:1.2rem;
            // background: pink;
            display:flex;
            flex-direction: column;
            .log,.reg{
                font-size: 0.3rem;
                color:#fff;
                margin-top:0.05rem;
            }
            .reg{
                margin-left:0.2rem;
            }
            p{
                // width:4.625rem;
                color:#fff;
                margin-top:0.1rem;
                font-size: 0.24rem;
            }
        }
    }
    .headPortrait{
        width: 0.9998rem;
        margin-top: 1.1rem;
        margin-left:0.5rem;
        box-shadow: 0 0 30px rgba(255, 255, 255,.5);
        border-radius: 50%;
    }
    .headPortraitImg{
        width: 100%;
    }
</style>