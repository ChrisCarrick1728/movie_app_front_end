<template>
  <div>
    <select name="Movie Format">
      <span v-for="movieFormat in movieFormatObj">
        <option v-bind:value="movieFormat.id">{{ movieFormat.format }}</option>
      </span>
    </select>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'

export default {
  name: '',
  data () {
    return {
        movieFormatObj: []
    }
  },
  methods: {},
  beforeCreate: function() {
    console.log("loading movie format")
    var params = new URLSearchParams()
    axios.defaults.withCredentials = true;
    axios.post(globalStore.phpPath + '/php/getMovieFormat.php')
    .then(response => {
      console.log(response.data)

    })
  }
}
</script>

<style>
h1, a {
  color: white;
}

</style>
