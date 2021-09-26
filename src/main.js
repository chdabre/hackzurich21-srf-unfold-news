import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/firebase'

Vue.config.productionTip = false

async function runApp() {
  const runMirageServer = (await import('@/api/mocks'/* webpackChunkName: "dev" */)).default;
  runMirageServer();

  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
}

runApp();
