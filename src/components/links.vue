<template>
  <nav>
    <router-link to="/">Logout</router-link>
    <router-link to="/home">Home</router-link>
    <a v-on:click="addMovies">Add Movies</a>
    <router-link to="/browse">Browse Movies</router-link>
  </nav>
</template>

<script>
export default {
  name: 'links',
  data () {
    return {
    }
  },
  methods: {
    addMovies: function () {
      console.log('add Movies clicked')
    }
  }
}
</script>

<style>
h1, a {
  color: white;
}

a {
  margin-left: 20px;
}

</style>
