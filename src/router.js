import VueRouter from 'vue-router';
import Login from './components/Login.vue'
import Loggedin from './components/Loggedin.vue'
import Movies from './components/Movies.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Login},
    {path: '/loggedin', component: Loggedin},
    {path: '/movies', component: Movies}
  ]
});

export default router;
