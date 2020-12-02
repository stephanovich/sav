import VueRouter from 'vue-router';
import Home from './components/Home';
import PageNav from './components/PageNav';
import Nav from './components/Nav'
import Form from './components/Form'
import Login from './components/Login'

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
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})