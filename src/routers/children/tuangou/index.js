export default {
    path: "/tuangou/:head",
    component: () => import("@/views/children/tuangou"),
    name: "tuangou",
    meta: {
        tabBarFlag: false,
        title:"识货-团购"
    }
}