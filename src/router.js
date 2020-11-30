import VueRouter from 'vue-router';
import Home from './components/Home';
import PageNav from './components/PageNav';
import Nav from './components/Nav'

export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:'/PageNav/:mapa',
            name: 'pagenav',
            component: PageNav
        },
        {
            path: '/nav',
            name: 'nav',
            component: Nav
        }
    ]
})