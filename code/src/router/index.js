import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views//Home.vue'
import Users from '../views/Users.vue'
import imgupload from '../views/imgupload.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/imgupload', component: imgupload },
    /* {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
               { path: '/users', component: Users },
               { path: '/imgupload', component: imgupload },

      ]} */
    ]
/*   {
    path: '/',
    redirect:'/imgupload',
  },
  {
    path: '/userInfolist',
    name: 'userInfolist',
    component: () => import('../views/userInfolist.vue'),
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('../views/userInfo.vue'),
  },
 
{
  path: '/imgupload',
  name: 'imgupload',
  component: () => import('../views/imgupload'),
},
{
  path: 'user',
  name: 'routeName',
  component: () => import('./pathToComponent'),
},
 */


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
