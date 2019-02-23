<template>
  <div>
    <h1>Browse Page</h1>
    <nav-link></nav-Link>
    <all-movies></all-movies>
  </div>
</template>

<script>
import AllMovies from '../components/allmovies.vue'
import NavLinks from '../components/links.vue';
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  components: {
    'all-movies': AllMovies,
    'nav-link': NavLinks
  },
  name: 'browsePage-app',
  data () {
    return {
    }
  },
  methods: {},
  beforeCreate: function() {
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100');
h1, a {
  color: white;
}

h1 {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 3px;
}
</style>
