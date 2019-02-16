<template>
  <div>
    <h1>Home Page</h1>
    <nav-link></nav-link>
  </div>
</template>

<script>
import NavLinks from '../components/links.vue';
export default {
  components: {
    'nav-link': NavLinks
  },
  name: 'homeComp_app',
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

<style scoped>
h1, a {
  color: white;
}

</style>
