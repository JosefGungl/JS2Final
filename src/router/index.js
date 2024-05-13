import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AccountPage from "@/views/AccountPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import MembershipPage from "@/views/MembershipPage.vue";
import ProgramsPage from "@/views/ProgramsPage.vue";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name: 'home', path:'/', component: HomePage},
    // {name: 'home', path: '/home', component: HomePage},
    {name: 'account', path: '/account', component: AccountPage,
      meta: {
        requiresAuth: true,
      }
    },
    {name: 'login', path: '/login', component: () => import('../views/LogInPage.vue')},
    {name: 'signup', path: '/signup', component: () => import('../views/SignUpPage.vue')},
    {name: 'membership', path: '/membership', component: MembershipPage},
    {name: 'programs', path: '/programs&classes', component: ProgramsPage},
    {name: 'about', path: '/about', component: AboutPage},
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
    );
  })
};

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    }else {
      alert("Hey! Hey you! Yeahhh you... How did you get here? you don't have access to this yet, please log in first.");
      next("/");
    }
  }else {
    next();
  }
})

export default router
