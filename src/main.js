import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // Importamos el router

createApp(App)
  .use(store) // Usamos Vuex
  .use(router) // Usamos Vue Router
  .mount('#app');


