<template>
  <div>

  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'

export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {},
  beforeCreate: function() {
    axios.defaults.withCredentials = true;
    axios.get(globalStore.phpPath + '/php/sessiondestroy.php')
    .then (response => {
      window.location = '/';
    })
  }
}
</script>

<style scoped>
h1, a {
  color: white;
}

</style>
