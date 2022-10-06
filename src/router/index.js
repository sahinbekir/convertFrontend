import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import store from "../store";

import DefaultLayout from '@/layouts/DefaultLayout'
import DefaultLayout2 from '@/layouts/DefaultLayout2'


const routes = [
  
  {

    
    path: '/',
    name: 'Home',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Login.vue'),
          

      },
      {
        path: '/register',
          name: 'Register',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "dashboard" */ '@/views/Register.vue'),
      },
      

      /*
       {
        path: '/demo',
        name: 'Demo',
        redirect: '/pages/demo',
      },
      {
        path: '/pages/demo',
        name: 'Demo',
        component: () => import('@/views/pages/demo.vue'),
      },


 


      {
        path: '/pages',
        name: 'Demo1',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/pages/demo',
        children: [
          {
            path: '/pages/demo-1',
            name: 'Demo-1',
            component: () => import('@/views/pages/demo-1.vue'),
          },
          {
            path: '/pages/demo-2',
            name: 'Demo-2',
            component: () => import('@/views/pages/demo-2.vue'),
          },
          {
            path: '/pages/userAdd',
            name: 'UserAdd',
            component: () => import('@/views/pages/userAdd.vue'),
          },
        ],
      },
    ],
  },
  
  

  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },

  {
    path: '/pages',
    redirect: '/pages/users',
    name: 'Actions',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
  children: [
      
    {
      path: 'useradd',
      name: 'userAdd',
      component: () => import('@/views/pages/userAdd'),
    },
    
      */
     
  ],
  
},
{
  path: '/',
  name: 'AdminHome',
  component: DefaultLayout,
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      name: 'DASHBOARD',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    },
    {
      path: '/admin',
      name: 'ADMINPROFILE',
      redirect: '/admin/profile',
    },
    {
      path: '/admin/profile',
      name: 'ADMINPROFILE',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/pages/adminUpPage.vue'),
    },
    {
      path: '/users',
      name: 'USER ADD',
      redirect: '/users/add',
    },
    {
      path: '/users/add',
      name: 'USER ADD',
      component: () => import('@/views/pages/userAdd.vue'),
    },
    {
      path: '/users',
      name: 'USERS LIST',
      redirect: '/users/list',
    },
    {
      path: '/users/list',
      name: 'USERS LIST',
      component: () => import('@/views/pages/userList.vue'),
    },
    {
      path: '/devices',
      name: 'DEVICE ADD',
      redirect: '/devices/add',
    },
    {
      path: '/devices/add',
      name: 'DEVICE ADD',
      component: () => import('@/views/pages/deviceAdd.vue'),
    },
    {
      path: '/devices',
      name: 'DEVICES LIST',
      redirect: '/devices/list',
    },
    {
      path: '/devices/list',
      name: 'DEVICES LIST',
      component: () => import('@/views/pages/deviceList.vue'),
    },


    {
      path: '/connection',
      name: 'CONNECTION ADD',
      redirect: '/connection/add',
    },
    {
      path: '/connection/add',
      name: 'CONNECTION ADD',
      component: () => import('@/views/pages/ioScriptAdd.vue'),
    },
    {
      path: '/connection',
      name: 'CONNECTIONS LIST',
      redirect: '/connection/list',
    },
    {
      path: '/connection/list',
      name: 'CONNECTIONS LIST',
      component: () => import('@/views/pages/ioScriptList.vue'),
    },




    {
      path: '/projects',
      name: 'PROJECT ADD',
      redirect: '/projects/add',
    },
    {
      path: '/projects/add',
      name: 'PROJECT ADD',
      component: () => import('@/views/pages/projectAdd.vue'),
    },
    {
      path: '/projects',
      name: 'PROJECTS LIST',
      redirect: '/projects/list',
    },
    {
      path: '/projects/list',
      name: 'PROJECTS LIST',
      component: () => import('@/views/pages/projectList.vue'),
    },


    
    
  ],
  
},
{
  path: '/',
  name: 'UserHome',
  component: DefaultLayout2,
  redirect: '/userpage',
  children: [
    {
      path: '/userpage',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/Dashboardcopy.vue'),
    },
    {
      path: '/user',
      name: 'MYPROFILE',
      redirect: '/user/profile',
    },
    {
      path: '/user/profile',
      name: 'MYPROFILE',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/pages/userUpPage.vue'),
    },

    {
      path: '/user',
      name: 'MYDEVICES',
      redirect: '/user/device',
    },
    {
      path: '/user/device',
      name: 'MYDEVICES',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/pages/userDevList.vue'),
    },{
      path: '/user',
      name: 'MYPROJECTS',
      redirect: '/user/project',
    },
    {
      path: '/user/project',
      name: 'MYPROJECTS',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '@/views/pages/userProList.vue'),
    },
    
    
  ],
},


]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})


export default router
