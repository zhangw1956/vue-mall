import Vue from 'vue';
import Router from 'vue-router';
import All from '@/components/all/All';
import Recommend from '@/components/recommend/Recommend';

Vue.use(Router);

export default new Router({
  routes: [
    {
    path: '/',
    redirect: '/all'
    },
    {
    path: '/all',
    name: '/All',
    component: All
    },
    {
    path: '/recommend',
    name: '/recommend',
    component: Recommend
    }
  ]
});
