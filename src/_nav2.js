export default [
  
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/userpage',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
    },
  },
  {
    component: 'CNavTitle',
    name: 'MYPROFILE',
  },
  {
    component: 'CNavItem',
    name: 'MYPROFILE',
    to: '/user/profile',
    icon: 'cil-drop',
  },
  {
    component: 'CNavTitle',
    name: 'MYDEVICES',
  },
  {
    component: 'CNavItem',
    name: 'MYDEVICES',
    to: '/user/device',
    icon: 'cil-drop',
  },
  {
    component: 'CNavTitle',
    name: 'MYPROJECTS',
  },
  {
    component: 'CNavItem',
    name: 'MYPROJECTS',
    to: '/user/project',
    icon: 'cil-drop',
  },
  
]
