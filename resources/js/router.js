import { createRouter, createWebHistory } from "vue-router";
import Login from "./Pages/Auth/Login.vue";
import Dashboard from "./Pages/Profile/Dashboard/Dashboard.vue";

const routes = [
    { path: "/", component: Login },
    { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (to.path === "/dashboard" && !token) {
        next("/");
    } else {
        next();
    }
});

export default router;
