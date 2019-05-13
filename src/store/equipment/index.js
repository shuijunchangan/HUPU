import {getNowMovie} from '@/api/api'
export default {
    namespaced: true,
    state: {
        infoList:[],
        Modular:[
            {
            name:'篮球',
            ename:"BASKETBALL",
            bannerSpan:'小帅不穿新球鞋',
            bgimg:'http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1',
            kind:['篮球鞋','篮球服饰','篮球配件','篮球'],
            brand:['Nike','adidas','Jordan','全部']
            },
            {
            name:'跑步',
            ename:"RUNNING",
            bannerSpan:'户外跑鞋选购',
            bgimg:'http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1',
            kind:['跑步鞋','跑步服饰','跑步配件','运动补给'],
            brand:['adidas','asics','New Balance','全部']
            },
            {
            name:'潮流',
            ename:"CASUAL",
            bannerSpan:'球鞋女孩',
            bgimg:'http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1',
            kind:['鞋类','服装','配件','耳机'],
            brand:['Converse','CASIO','Vans','全部'],
            hexagon:['http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzcwMTA3MzY3Ny9UQjJFeE9Hd1I0bHB1Rmp5MXpqWFhjQUtwWGFfISE3MDEwNzM2NzcuanBn?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyX3lMSmVSMGxwdUZqU3N6ZFhYY2R4RlhhXyEhMjQwMjc1Njk5NC5qcGc?imageView2/1/w/100/h/100']
            },
            {
            name:"健身",
            ename:"FITNESS",
            bannerSpan:'谁说女子不如男',
            bgimg:'http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1',
            kind:['健身装备','健身用品','营养补剂','全部类目'],
            hexagon:['http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzE3MTM0MjQ2NTgvVEIxOVRFM2d3Zkg4S0pqeTF6Y1hYY1R6cFhhXyEhMC1pdGVtX3BpYy5qcGc?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzE3MTM0MjQ2NTgvVEIydjlGRW9wR1dCdU5qeTBGYlhYYjRzWFhhXyEhMTcxMzQyNDY1OC5qcGc?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzE3MTM0MjQ2NTgvVEIyVlpfcHFUSllCZU5qeTF6ZVhYYWh6VlhhXyEhMTcxMzQyNDY1OC5qcGc?imageView2/1/w/100/h/100','http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzE3MTM0MjQ2NTgvVEIySEU4VmsyaVNCdU5rU25oSlhYYkRjcFhhXyEhMTcxMzQyNDY1OC5qcGc?imageView2/1/w/100/h/100']
            }
        ],
    },
    mutations: {
        getInformationMutation(state, params) {
            state.infoList = params.data
            // state.infoList.push(params.data);
            // console.log(state.infoList);
        }
    },
    actions: {
         async getInfo({commit}) {
            let data =  await getNowMovie();
            // console.log(data)
            commit("getInformationMutation",data);
        }
    }
}