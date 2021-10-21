import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home';
import Create from './components/Create';
import ArticleDetail from './components/ArticleDetail';
import Update from './components/Update';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/create/',
        name: 'create',
        component: Create
    },
    {
        path: '/article/:id/',
        name: 'detail',
        component: ArticleDetail,
        props: true
    },
    {
        path: '/update/:id/',
        name: 'update',
        component: Update,
        props: true
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
