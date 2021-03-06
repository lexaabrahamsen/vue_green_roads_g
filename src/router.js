import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RecPlacesIndex from './views/RecPlacesIndex.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/rec_places',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/rec_places',
      name: 'rec-places-index',
      component: RecPlacesIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
});
