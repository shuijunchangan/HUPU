import {
    getTuangou
} from '@/api/api'
export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        getTuangouMutation(state, params) {
            for (var i = 0; i < params.length; i++) {
                state.data.push(params[i]);
            }
        }
    },
    actions: {
        async getTuangouActions({
            commit
        }) {
            let data = await getTuangou();
            commit("getTuangouMutation", data.data.dataInfo)
        }
    }
}