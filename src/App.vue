<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLinks from './components/links.vue';
import Header from './components/header.vue'
import Login from './pages/loginPage.vue'
import Home from './pages/homePage.vue'
import axios from 'axios'
import {globalStore} from './main.js'

export default {
  components: {
    'app-header': Header,
    'app-login': Login,
    'app-home': Home,
    'nav-link': NavLinks
  },
  name: 'main_app',
  data () {
    return {
      main_component: 'app-home'
    }
  },
  methods: {
    updateComponent: function (event) {
      this.main_component = event
    }
  },
  beforeCreate() {
  }
}
</script>

<style>
html, body {
  margin: 0px;
}

html {
  background-image: url('../src/assets/SVG/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-color: #323232;
  width: 100%;
}

body {
  height: 100%;
  overflow: scroll;
}
</style>
