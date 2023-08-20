import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';
import LoginPage from '@/pages/login-page.vue';
import SignUpPage from '@/pages/signup-page.vue';

export const routes = [
  { name: 'home', path: '/', component: Index },
  { name: 'login', path: '/login', component: LoginPage },
  { name: 'signup', path: '/signup', component: SignUpPage },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
