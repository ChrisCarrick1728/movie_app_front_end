<template>
  <div>
    <all-movies></all-movies>
    <movie-search></movie-search>
  </div>
</template>

<script>
import AllMovies from '../components/links.vue'
import MoviesSearch from '../components/addSearch.vue'
import Home from '../components/home.vue'
import axios from 'axios'
import {globalStore} from '../main.js'

export default {
  components: {
    'all-movies': AllMovies,
    'movie-search': MoviesSearch
  },
  name: 'addPage_app',
  data () {
    return {
    }
  },
  methods: {
  },
  created: function() {
    axios.post(globalStore.phpPath + '/php/checkauth.php')
    .then(response => {
      if (response.data[0] === 'false') {
        window.location = '#/'
      }
    })
  }
}
</script>

<style scoped>
h1, a {
  color: white;
}

</style>
