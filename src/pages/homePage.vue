<template>
  <div id="app">
    <nav-links></nav-links>
    <component
      :is="component"
      v-on:swapLogin="swapLoginComponent">
    </component>
  </div>
</template>

<script>
import Home from '../components/home.vue'
import NavLinks from '../components/links.vue'
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  components: {
    'app-home': Home,
    'nav-links': NavLinks
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

  }
}
</script>

<style scoped>

</style>
