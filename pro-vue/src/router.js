import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from '@pages/foo/index.vue';
import Bar from '@pages/bar/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
    ],
})
