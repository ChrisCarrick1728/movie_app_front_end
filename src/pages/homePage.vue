<template>
  <div id="app">
    <component
      :is="component"
      v-on:swapLogin="swapLoginComponent">
    </component>
  </div>
</template>

<script>
import Home from '../components/home.vue'
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  components: {
    'app-home': Home
  },
  name: 'homePage_app',
  data () {
    return {
      component: 'app-home'
    }
  },
  methods: {
    swapLoginComponent: function () {
      if (this.component === 'app-login') {
        this.component = 'app-signup'
      } else {
        this.component = 'app-login'
      }
    }
  },
  created: function() {
    axios.post(globalStore.phpPath + '/php/checkauth.php')
    .then(response => {
      console.log(response.data);
      if (response.data[0] === 'false') {
        window.location = '#/'
      }
    })
  }
}
</script>

<style>
html, body {
  margin: 0px;
}

body {
  background-color: #333;
}
</style>
