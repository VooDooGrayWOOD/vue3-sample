import MainPage from '@/pages/MainPage'
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'
import PostPage from '@/pages/PostPage'
import PostIdPage from '@/pages/PostIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'

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
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
