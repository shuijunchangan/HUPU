import axios from "axios";
const http = axios.create({
    timeout:10000,
    withCredentials:true
})
http.interceptors.request.use((config)=>{
    if(config.method == "post"){
        
    }else if(config.method == "get"){
        config.params = {...config.data}
    }
    return config;
},(e)=>{
    Promise.reject(e)
})
http.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        return res.data;
    }
})

export default http;


 