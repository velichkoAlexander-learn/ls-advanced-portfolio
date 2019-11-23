export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
        }
    },
    getters: {
        userIsLogged: state => {
            const userObj = state.user;
            const userObjectIsEmpty =
              Object.keys(userObj).length === 0 && userObj.constructor === Object;
            
            return userObjectIsEmpty === false;
        }
    },
    actions: {
        async loginUser(store, user) {
            try {
                console.log(store);
                const {
                    data: {token}
                }
                  = await this.$axios.post("/login", user);
                localStorage.setItem("token", token);
                this.$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
                // commit(SET_USER, user);
                return true;
            } catch (error) {
                alert(error.message);
            }
        }
    },
};

