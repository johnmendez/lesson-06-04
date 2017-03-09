import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import NewPost from './routes/new-post.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/new-post',
    component: NewPost,
    name: 'new-post',
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
