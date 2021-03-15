import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import catalog from '../views/catalog/catalog.vue'
import product from '../views/product/product.vue'
import cart from '../views/cart/cart.vue'
import order from '../views/order/order.vue'
import delivery from "../views/delivery/delivery.vue";
import about from "../views/about/about.vue";
import promotion from "../views/promotion/promotion.vue";
import contact from "../views/contact/contact.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: catalog
    },
    {
        path: '/product',
        name: 'product',
        component: product
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },
    {
        path: '/order',
        name: 'order',
        component: order
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: delivery
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/promotion',
        name: 'promotion',
        component: promotion
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
    {
        path: '/*',
        component: index
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
