import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router.js';

Vue.config.productionTip = false;
Vue.config.runtimeCompiler = true;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
