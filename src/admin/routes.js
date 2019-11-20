import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminAbout from './components/pages/AdminAbout';
import AdminWork from './components/pages/AdminWork';
import AdminReview from './components/pages/AdminReview';
import AdminLogin from "./components/pages/AdminLogin";
import AdminNotFound from "./components/pages/AdminNotFound";

const routes = [
    {
        path: '/',
        component: AdminAbout
    },
    {
        path: '/about',
        component: AdminAbout
    },
    {
        path: '/work',
        component: AdminWork
    },
    {
        path: '/review',
        component: AdminReview
    },
    {
        path: '/login',
        component: AdminLogin
    },
    {
        path: '/*',
        component: AdminNotFound
    }
];

export default new VueRouter({
    routes,
    // relative: true,
    // base:'/',
    // mode: 'history'
});
