import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { baseURL } from './constants';

const Vue = createApp(App);

Vue.use(router);

Vue.config.globalProperties.apiPath = baseURL;

Vue.mount('#app');
