import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminAbout from './components/AdminAbout';
import AdminWork from './components/AdminWork';
import AdminReview from './components/AdminReview';
import AdminLogin from "./components/AdminLogin";
import AdminNotFound from "./components/AdminNotFound";

const routes = [
    {
        path: '/ ',
        component: AdminLogin
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
    // {
    //     path: '/admin/*',
    //     component: AdminNotFound
    // }
];

export default new VueRouter({
    routes,
    // relative: true,
    // base:'/',
    // mode: 'history'
});
