import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { baseURL } from './constants';
import Api from './mixins/Api';

const Vue = createApp({
  extends: App,
  mixins: [Api]
});

Vue.use(router);

// Vue.mixin(Api);

Vue.config.globalProperties.apiPath = baseURL;

Vue.mount('#app');
