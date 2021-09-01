import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../view/HomePage';
// import AboutPage from '../view/AboutPage'


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: () => import('../view/AboutPage'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;