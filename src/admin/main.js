import Vue from 'vue';
import App from './App.vue';
import router from './routes';

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
	router,
	el: '#app-root',
	render: (h) => h(App)
});
