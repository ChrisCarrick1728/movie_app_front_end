import login from './pages/loginPage.vue'
import home from './pages/homePage.vue'
import add from './pages/addPage.vue'
import browse from './pages/browsePage.vue'
import logout from './pages/logoutPage.vue'

export default [
  {path: '/', component: login},
  {path: '/logout', component: logout},
  {path: '/home', component: home},
  {path: '/add', component: add},
  {path: '/browse', component: browse}
]
