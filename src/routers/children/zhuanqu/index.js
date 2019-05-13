export default {
    path: "/zhuanqu/:head",
    component: () => import("@/views/children/zhuanqu"),
    name: "zhuanqu",
    meta: {
        tabBarFlag: false,
        title:"专区"
    }
}