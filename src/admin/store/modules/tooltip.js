export default {
    namespaced: true,
    state: {
        tooltip: {
            active: false,
            massage: 'test',
            status: 'success',
        }
    },
    mutations: {
        SET_STATUS(state, {
            active = false,
            massage = '',
            status = 'success'
        }) {
            state.tooltip = {
                active,
                massage,
                status
            };
        },
    },
    
    actions: {
        showTooltip({commit}, status) {
            commit('SET_STATUS', status);
            setTimeout(() =>  commit('SET_STATUS', {
                active: false,
            }), 3000);
        },
        closeTooltip({commit}) {
            commit('SET_STATUS', {
                active: false,
            })
        }
    }
}
