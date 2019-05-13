import {
    getFind
} from '@/api/api'
export default {
    namespaced: true,
    state: {
        data: [],
        tit: ['今日推荐', '最新资讯', '测评All Star', '潮流风向', '达人专栏', '球鞋90秒', '装备党', '潮鞋志', '3C新奇特', '说鞋话'],
        banner: [{
            href:"http://www.shihuo.cn/article/detail/21874.html#qk=banner&order=5",
            img: "http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1"
            },
            {
                href:"http://www.shihuo.cn/article/detail/22124.html#qk=banner&order=1",
                img: "http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1"
            },
            {
                href:"http://www.shihuo.cn/article/detail/18891.html#qk=banner&order=2",
                img: "http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1"
            },
            {
                href:"http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1#qk=banner&order=4",
                img: "http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1"
            },
            {
                href:"http://www.shihuo.cn/article/detail/21874.html#qk=banner&order=5",
                img: "http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1"
            }
        ]
    },
    mutations: {
        getFindMutation(state, params) {
            state.data = params;
            console.log(state.data)
        }
    },
    actions: {
        async getFind({
            commit
        }) {
            let data = await getFind();
            // console.log(data.data);
            commit("getFindMutation", data.data);
        }
    }
}