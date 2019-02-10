<template>
  <div>
    <h1>Browse Page</h1>
    <all-movies></all-movies>
  </div>
</template>

<script>
import AllMovies from '../components/allmovies.vue'

export default {
  components: {
    'all-movies': AllMovies
  },
  name: 'browsePage-app',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style>
h1, a {
  color: white;
}

</style>
