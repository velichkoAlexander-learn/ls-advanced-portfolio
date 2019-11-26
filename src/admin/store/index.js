import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from "./modules/user";
import tooltip from "./modules/tooltip";
import categories from "./modules/categories";
import skills from "./modules/skills";

export default new Vuex.Store({
    modules: {
        user,
        tooltip,
        categories,
        skills
    }
})
