module.exports = {
    devServer: {
        proxy: {
            "/homefis": {
                target: "http://m.shihuo.cn", //代理的是域名
                changeOrigin: true, //是否允许跨域（是否允许改变自己本地的域名）
            },
            "/find": {
                target: "http://m.shihuo.cn", //代理的是域名
                changeOrigin: true, //是否允许跨域（是否允许改变自己本地的域名）
            },
            "/zhuangbei": {
                target: "http://m.shihuo.cn", //代理的是域名
                changeOrigin: true, //是否允许跨域（是否允许改变自己本地的域名）
            },
            "/tuangou": {
                target: "http://m.shihuo.cn",
                changeOrigin: true, //是否允许跨域（是否允许改变自己本地的域名）
            }
        }
    }
}

//中间件：http-proxy-middleware
//http://m.shihuo.cn/zhuangbei/getHomeNews识货