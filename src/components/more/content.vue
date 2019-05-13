<template>
    <div class="more">
        <div class="moreContent"  v-for="(items,index) in list">
        <div class="menuList">
            <div class="contentTitle">
                <span>{{items.name}}</span>
            </div>
            <ul class="menuUl">
                <li class="menuLi" v-for="(item,index1) in items.li">
                    <a class="menuA" href="javascript:;">
                        <img :src="item.img" v-show="item.img">
                        <span>{{item.text}}</span>
                    </a>
                </li>
            </ul>
            
        </div>
        <Bg/>
        </div>
    </div>
</template>
<script>
import Vuex from 'vuex'
import Bg from '../bg/bg-area'
export default {
    components: {
        Bg
    },
    computed: {
        ...Vuex.mapState({
            list:state=>state.More.menu
        })
    },
    created () {
        console.log(this.list);
    }
}
</script>
<style scoped lang="scss">
    .moreContent{
        width: 100%;
        // height:2.1919rem;
        // background: pink;
        display: flex;
        flex-direction: column;
        .menuList{
            width: 100%;
            height:2.1919rem;
            display: flex;
            padding: .15rem;
            flex-direction: column;
            .contentTitle{
                height: .42rem;
                width: 7.2rem;
                // background: burlywood;
               
                background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png) left center repeat-x;
                background-size: .06667rem;
                display: flex;
                justify-content: flex-start;
                span{
                    display: block;
                    width: 1.32rem;
                     font-size: .28rem;
                     color:#444;
                     line-height: .28rem;
                     height: .28rem;
                    padding:0 0 0 .15rem;
                    // margin:0 .15rem;
                    background: #fff;
                }
            }
            .menuUl{
                width:100%;
                height: 100%;
                display: flex;
                 margin:0 .15rem;
                justify-content: space-around;
                .menuLi{
                    width:1.8rem;
                    height: 1.07188rem;
                    margin:.2rem auto;
                    display: flex;
                    
                        .menuA{
                            width:100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: center;
                            img{
                                width: .9rem;
                                height: .6119rem;
                            }
                            span{
                                font-size: .24rem;
                                color:#444
                            }
                        }
                }
            }
        }
    }
</style>