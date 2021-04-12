import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Profile from '../views/Profile.vue'
// import User from '../views/user.vue'

const Home = () => import('../views/Home')
const Profile = () => import('../views/Profile')
const User = () => import('../views/user')

Vue.use(VueRouter)



const routes = [
  {
    path: '',
    redirect: '/home',
    // component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/user/:userid',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
