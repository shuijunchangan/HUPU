export default {
    path: "/index",
    component: () => import("@/views/first"),
    name: "index",
    // children: [{
    //     path: "tuangou",
    //     name: "tuangou",
    //     component: () => import("@/views/children/tuangou"),
    //     meta: {
    //         tabBarFlag: false
    //     },
    // }]

    meta: {
        tabBarflag: true,
        title:"首页"
    }
}