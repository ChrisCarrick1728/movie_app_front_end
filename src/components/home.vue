<template>
  <div>
    <h1>Home Page</h1>
    <a v-on:click="addMovies">Add Movies</a>
    <a v-on:click="browseMovies">Browse Movies</a>
  </div>
</template>

<script>
export default {
  name: 'homeComp_app',
  data () {
    return {
    }
  },
  methods: {
    addMovies: function () {
      console.log('add Movies clicked')
    },
    browseMovies: function () {
      console.log('browse movies clicked')
    }
  }
}
</script>

<style>
h1, a {
  color: white;
}

</style>
