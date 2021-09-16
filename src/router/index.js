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
  },
  {
    path: "/about/strategy",
    name: "AboutStrategy",
    component: () => import('../view/AboutStrategy')
  },
  {
    path: "/about/values",
    name: "aboutValues",
    component: () => import('../view/AboutValuesPage')
  },
  {
    path: "/companies",
    name: "companies",
    component: () => import('../view/OurCompaniesPage.vue')
  },
  {
    path: "/news/companynews",
    name: "companiNews",
    component: () => import('../view/NewsCompanyNews.vue')
  },
  {
    path: "/news/media",
    name: "newsMedia",
    component: () => import('../view/NewsMedia.vue')
  },
  {
    path: "/privacypolice",
    name: "privacyPolice",
    component: () => import('../view/PrivacyPolice.vue')
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import('../view/Contact.vue'),
    redirect: '/contact/customers',
    children: [ 
      {
        name: 'Customers',
        path: 'customers',
        component: () => import('../components/Contact/Customers/CustomersChild.vue')
      },
      {
        name: 'Offices',
        path: 'offices',
        component: () => import('../components/Contact/Officer/Officer.vue')
      },
      {
        name: 'Popular questions',
        path: 'popular-questions',
        component: () => import('../view/Questions.vue')
      },
    ]
  },
//   { 
//     path: '/referal', 
//     name: 'Referal', 
//     component: () => import('../views/dashboard/Referal.vue'), 
//     redirect: '/referal/link', 
//     children: [ 
//         { 
//             name: 'Link', 
//             path: 'link', 
//             component: () => import('../views/dashboard/referal/Link.vue') 
//         }, 
//         { 
//             name: 'Report', 
//             path: 'report', 
//             component: () => import('../views/dashboard/referal/Report.vue') 
//         }, 
//     ] 
// },

  {
    path: "/career",
    name: "career",
    component: () => import('../view/CareerPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;