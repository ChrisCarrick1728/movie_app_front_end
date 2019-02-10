import login from './pages/loginPage.vue'
import home from './pages/homePage.vue'
import add from './pages/addPage.vue'
import browse from './pages/browsePage.vue'

export default [
  {path: '/', component: login},
  {path: '/home', component: home},
  {path: '/add', component: add},
  {path: '/browse', component: browse}
]
