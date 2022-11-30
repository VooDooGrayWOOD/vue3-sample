import MainPage from '@/pages/MainPage'
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'
import PostPage from '@/pages/PostPage'
import PostIdPage from '@/pages/PostIdPage'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
