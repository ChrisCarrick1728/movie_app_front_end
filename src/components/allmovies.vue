<template>
  <div>
    <h2>All Movies</h2>
    <div class="tile" v-for="movie in allMoviesObj">
      <p>{{ movie.title }}</p>
      <p>{{ movie.description }}</p>
      <img v-bind:src="movie.movie_poster_url" alt="">
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'

export default {
  name: 'allmovies',
  data () {
    return {
      allMoviesObj: {}
    }
  },
  methods: {
  },
  mounted() {
    axios.get(globalStore.phpPath + '/php/showAllMovies.php')
    .then(response => {
      console.log(response.data)
      this.allMoviesObj = response.data
    })
  }
}
</script>

<style>
h1, h2, a {
  color: white;
}

</style>
