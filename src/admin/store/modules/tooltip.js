export default {
    namespaced: true,
    state: {
        tooltip: {
            active: false,
            message: 'test',
            status: 'success',
        }
    },
    mutations: {
        SET_STATUS(state, {
            active = false,
            message = '',
            status = 'success'
        }) {
            
            state.tooltip = {
                active,
                message,
                status
            };
        },
    },
    
    actions: {
        showTooltip({commit}, status) {
            commit('SET_STATUS', status);
            setTimeout(() =>  commit('SET_STATUS', {
                active: false,
            }), 1500);
        },
        closeTooltip({commit}) {
            commit('SET_STATUS', {
                active: false,
            })
        }
    }
}
