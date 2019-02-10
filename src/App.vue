<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <!-- <component
      :is="main_component"
      v-on:changeComponent="updateComponent($event)">
    </component> -->
  </div>
</template>

<script>
import Header from './components/header.vue'
import Login from './pages/loginPage.vue'
import Home from './pages/homePage.vue'
import axios from 'axios'
import {globalStore} from './main.js'

export default {
  components: {
    'app-header': Header,
    'app-login': Login,
    'app-home': Home
  },
  name: 'main_app',
  data () {
    return {
      main_component: 'app-login'
    }
  },
  methods: {
    updateComponent: function (event) {
      this.main_component = event
    }
  },
  beforeCreate() {
    axios.get(globalStore.phpPath + '/php/sessionstart.php');
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
