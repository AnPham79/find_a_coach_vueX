import { createApp } from 'vue';
import router from './route.js';

const app = createApp({})

app.use(router)

app.mount('#app');
