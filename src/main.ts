import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-bootstrap.css';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(ToastPlugin);
app.mount('#app');
