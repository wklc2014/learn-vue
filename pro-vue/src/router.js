import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例
export default new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
