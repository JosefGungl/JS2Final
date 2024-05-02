import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AccountPage from "@/views/AccountPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import LogInPage from "@/views/LogInPage.vue";
import MembershipPage from "@/views/MembershipPage.vue";
import ProgramsPage from "@/views/ProgramsPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name: 'home', path:'/', component: HomePage},
    {name: 'home', path: '/home', component: HomePage},
    {name: 'account', path: '/account', component: AccountPage},
    {name: 'login', path: '/login', component: LogInPage},
    {name: 'signup', path: '/signup', component: SignUpPage},
    {name: 'membership', path: '/membership', component: MembershipPage},
    {name: 'programs', path: '/programs&classes', component: ProgramsPage},
    {name: 'about', path: '/about', component: AboutPage},
  ]
})

export default router
