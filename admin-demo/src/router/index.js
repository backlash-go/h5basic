import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        // name: 'layout',
        component: Layout,
        children: [
            {
                path: '', //PATH为空 会作为默认子路由
                name: 'home',
                component: Home,
            }

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
