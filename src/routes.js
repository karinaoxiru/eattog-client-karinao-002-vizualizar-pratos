import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import Splash from './components/Splash.vue';
import Admin from './views/Admin.vue';
import Plates from './views/Plates.vue';
import SinglePlates from './views/SinglePlates.vue';
import StateOrder from './views/StateOrder.vue';

const routes = [
    { path: '/', component: Splash },
    { path: '/inicio', component: Home },
    { path: '/restaurants', component: Restaurants },
    { path: '/admin', component: Admin },
    { path: '/plates',name: Plates, component: Plates},
    { path: '/plates/:id', name: 'SinglePlates',  props: true, query: true, component: SinglePlates},
    { path: '/stateorder',name: StateOrder, component: StateOrder }
    
];  

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;