import { createApp } from 'vue';

import router from './route.js';
import App from './App.vue';
import store from './store/index.js';
import BaseCart from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-card', BaseCart);

app.mount('#app');
