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
    component: () => import('../view/About'),
  },
  {
    path: "/about/managment",
    name: "Managmant",
    component: () => import('../view/Managment')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;