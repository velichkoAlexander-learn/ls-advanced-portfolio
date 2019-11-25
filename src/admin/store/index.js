import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from "./modules/user";
import tooltip from "./modules/tooltip";

export default new Vuex.Store({
    modules: {
        user,
        tooltip
    }
})
