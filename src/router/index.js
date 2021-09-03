import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../view/HomePage';


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about/history",
    name: "History",
    component: () => import('../view/AboutHistory'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;