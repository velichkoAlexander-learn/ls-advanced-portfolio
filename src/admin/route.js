import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import AdminAbout from './components/AdminAbout';
import AdminWork from './components/AdminWork';
import AdminReview from './components/AdminReview';

const routes = [
	{
		path: '/admin',
		component: AdminAbout
	},
	{
		path: '/admin/about',
		component: AdminAbout
	},
	{
		path: '/admin/work',
		component: AdminWork
	},
	{
		path: '/admin/review',
		component: AdminReview
	}
];

export default new VueRouter({ routes, mode: 'history' });
