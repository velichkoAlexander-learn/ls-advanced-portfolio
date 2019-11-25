import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store/";
import $axios from "./request";

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
        component: AdminLogin,
        meta: {
            public: true
        }
    },
    {
        path: '/*',
        component: AdminNotFound
    }
];

 const router = new VueRouter({
    routes,
    // relative: true,
    // base:'/',
    // mode: 'history'
});

router.beforeEach(async (to, from, next) => {
    const isPublicRoute = to.matched.some(record => record.meta.public);
    const isUserLogged = store.getters["user/userIsLogged"];
    
    if (isPublicRoute === false && isUserLogged === false) {
        const token = localStorage.getItem("token");
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        
        try {
            const response = await $axios.get("/user");
            store.commit("user/SET_USER", response.data.user);
            next();
        } catch (error) {
            router.replace("/login");
            localStorage.removeItem("token");
        }
    } else {
        next();
    }
});

export default router;
