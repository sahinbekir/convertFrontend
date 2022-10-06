export default [
  
  {
    component: 'CNavItem',
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
    },
  },
  {
    component: 'CNavTitle',
    name: 'ADMINPROFILE',
  },
  {
    component: 'CNavItem',
    name: 'ADMINPROFILE',
    to: '/admin/profile',
    icon: 'cil-drop',
  },
  {
    component: 'CNavTitle',
    name: 'USERS',
  },
  {
    component: 'CNavItem',
    name: 'ADD',
    to: '/users/add',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'LIST',
    to: '/users/list',
    icon: 'cil-drop',
  },
  {
    component: 'CNavTitle',
    name: 'DEVICES',
  },
  {
    component: 'CNavItem',
    name: 'ADD',
    to: '/devices/add',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'LIST',
    to: '/devices/list',
    icon: 'cil-drop',
  },

  {
    component: 'CNavTitle',
    name: 'CONNECTIONS',
  },
  {
    component: 'CNavItem',
    name: 'ADD',
    to: '/connection/add',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'LIST',
    to: '/connection/list',
    icon: 'cil-drop',
  },


  {
    component: 'CNavTitle',
    name: 'PROJECTS',
  },
  {
    component: 'CNavItem',
    name: 'ADD',
    to: '/projects/add',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'LIST',
    to: '/projects/list',
    icon: 'cil-drop',
  },
  
  

  





  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
