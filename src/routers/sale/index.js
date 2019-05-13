export default {
    path: "/sale",
    component: () => import("@/views/sale"),
    name: "sale",
    meta: {
        tabBarflag: true,
        title:"优惠"
    }
}