import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BitcoinDetails from '../views/BitcoinDetails.vue'
import BitcoinUmrechner from '../views/BitcoinUmrechner'
import BitcoinDiagramm from '../views/BitcoinDiagramm'
import MeineBitcoin from '../views/MeineBitcoin'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/bitcoinDetails',
        name: 'BitcoinDetails',
        component: BitcoinDetails
    },
    {
        path: '/bitcoinUmrechner',
        name: 'BitcoinUmrechner',
        component: BitcoinUmrechner
    },
    {
        path: '/meinebitcoin',
        name: 'MeineBitcoin',
        component: MeineBitcoin
    },
    {
        path: '/bitcoinDiagramm',
        name: 'BitcoinDiagramm',
        component: BitcoinDiagramm
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
