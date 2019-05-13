import http from "@/utils/http.js";

export const getNowMovie = function () {
    return http.get("/zhuangbei/getHomeNews")
}
export const getFind = function () {
    return http.get("/find/mobileList?tag_id=283&param_str=")
}
export const getIndex = function () {
    return http.get("/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")
}
export const getTuangou = function () {
    return http.get("/tuangou/getData?brand=&category=&order=rank&sex=&coming=0&key=")
}