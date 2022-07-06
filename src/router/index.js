import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/Call',
            component: () => import('../views/Call.vue')
        },
        {
            path: '/Ask',
            component: () => import('../views/Ask.vue')
        },

    ],
})

export default router 
