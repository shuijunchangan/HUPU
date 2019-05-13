import {
    getIndex
} from '@/api/api'
export default {
    namespaced: true,
    state: {
        data: [],
        youhui: [],
        banner: [{
                href: "http://www.shihuo.cn/app/assets/yjg/1.0.0/index.html?id=29#qk=banner&order=5",
                img: "http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1"
            },
            {
                href: "http://t.shihuo.cn/m/565.html#qk=banner&order=1",
                img: "http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1"
            },
            {
                href: "http://t.shihuo.cn/m/563.html#qk=banner&order=2",
                img: "http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1"
            },
            {
                href: "http://www.shihuo.cn/article/detail/24257.html#qk=banner&order=3",
                img: "http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1"
            },
            {
                href: "http://www.shihuo.cn/article/detail/24877.html#qk=banner&order=4",
                img: "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1"
            }
        ],
        
    },
    mutations: {
        getIndexMutations(state, params) {
            for (var i = 0; i < params.length; i++) {
                if (params[i].show_type == "single3") {
                    state.data.push(params[i]);
                }
            }
            // console.log(state.data)
            // console.log(state.data)
        },
        getIndexMutationsYouhui(state, params) {
            for (var i = 0; i < params.length; i++) {
                state.youhui.push(params[i]);
            }
        }
    },
    actions: {
        async getIndexActions({
            commit
        }) {
            var data = await getIndex();
            // console.log(data.data);
            commit("getIndexMutations", data.data);
            commit("getIndexMutationsYouhui", data.youhui);
        }

    },
}