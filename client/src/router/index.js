import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // beforeEnter: (to, from, next) => {
    //   if (!localStorage.getItem('access_token')) {
    //     next('/login')
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/create',
    name: 'CreateProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateProduct.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/update/:id',
    name: 'UpdateProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateProduct.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next('/login')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
