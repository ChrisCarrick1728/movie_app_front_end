import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import axios from 'axios'

Vue.use(VueRouter)

// mixin = {
//   created: function() {
//     axios.post(globalStore.phpPath + '/php/checkauth.php')
//     .then(response => {
//       console.log(response.data);
//       if (response.data[0] === 'false') {
//         //window.location = '#/'
//       }
//     })
//   }
// }

const router = new VueRouter({
  routes: Routes,
})

export const globalStore = new Vue({
  data: {
    phpPath: 'https://carrick-cs313-movie-app-php.herokuapp.com'
    //phpPath: 'http://localhost:8000/web'
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
