import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store'
import axios from './request';

store.$axios = axios;

import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

new Vue({
    router,
    store,
    el: '#app-root',
    render: (h) => h(App)
});
