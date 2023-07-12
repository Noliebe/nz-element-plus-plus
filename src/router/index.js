import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import treeView from '@/views/tree/mini-tree.vue';

const routes = [
  {
    path: '/',
    name: 'tree',
    component: treeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about-view.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
