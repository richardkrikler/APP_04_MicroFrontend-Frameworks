import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
