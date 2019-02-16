<template>
  <div id="app">
    <component
      :is="component"
      v-on:swapLogin="swapLoginComponent">
    </component>
  </div>
</template>

<script>
import Login from '../components/login.vue'
import Signup from '../components/signup.vue'

export default {
  components: {
    'app-login': Login,
    'app-signup': Signup
  },
  name: 'loginPage_app',
  data () {
    return {
      component: 'app-login'
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
  updateComponent: function (event) {
    console.log(event)
  }
}
</script>

<style scoped>
html, body {
  margin: 0px;
}

body {
  background-color: #333;
}
</style>
