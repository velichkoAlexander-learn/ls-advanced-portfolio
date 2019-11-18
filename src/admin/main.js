import Vue from 'vue';
import App from './App.vue';
import router from './route';

new Vue({
	router,
	el: '#app-root',
	render: (h) => h(App)
});
