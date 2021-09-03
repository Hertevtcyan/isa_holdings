import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import * as VueAos from 'vue-aos'
import AOS from "aos";
import "aos/dist/aos.css";


const app = createApp(App);
app.AOS = new AOS.init({ disable: "phone" });

app.use(router).mount('#app')