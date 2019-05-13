export default {
    path: "/more",
    component: () => import("@/views/more"),
    name: "more",

    meta: {
        tabBarflag: true,
        title:"更多"
    }
}