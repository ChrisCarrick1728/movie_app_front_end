<template>
  <nav>
    <ul id="bigMenu">
      <li v-if="userAuthenticated"><router-link to="/logout">Logout</router-link></li>
      <li v-if="!userAuthenticated"><router-link to="/login">Login</router-link></li>
      <li><router-link to="/add">Add Movie</router-link></li>
      <li><router-link to="/browse">Browse Movies</router-link></li>
    </ul>
    <ul id="smallMenu" v-show="showMenu">
      <li v-if="userAuthenticated"><router-link to="/logout">Logout</router-link></li>
      <li v-if="!userAuthenticated"><router-link to="/login">Login</router-link></li>
      <li><router-link to="/add">Add Movie</router-link></li>
      <li><router-link to="/browse">Browse Movies</router-link></li>
    </ul>
    <div class="hamburgerButton" id="hamburgerButton" v-on:click="showMenu = !showMenu">

    </div>
  </nav>
</template>

<script>
import axios from 'axios'
import {globalStore} from '../main.js'
export default {
  name: 'links',
  data () {
    return {
      userAuthenticated: false,
      showMenu: false
    }
  },
  methods: {
  },
  beforeCreate: function() {
    axios.post(globalStore.phpPath + '/php/checkauth.php')
    .then(response => {
      console.log(response.data);
      if (response.data[0] === 'false') {
        this.userAuthenticated = false;
        window.location = '#/login'
      } else {
        this.userAuthenticated = true;
      }
    })
  }
}
</script>

<style scoped>

.hamburgerButton {
  background-color: #333;
  border-radius: 5px;
  position: fixed;
  top:5px;
  right: 5px;
  width:40px;
  height: 40px;
  z-index: 7;
  cursor: pointer;
  display: none;
}
ul {
  position: fixed;
  top: 0px;
  right: 0px;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 7;
  display: block;
}

#bigMenu {
  display: block;
}



.router-link-active{
  background-color: LemonChiffon;
}

li {
  float: right;
}
a {
  font-family: sans-serif;
  font-weight: lighter;
  text-decoration: none;
  color: #333;
  padding: 16px;
  display: block;
}

a:hover {
  background-color: #888;
}

@media only screen and (max-width: 700px) {
  #bigMenu {
    display: none;
  }

  ul {
    padding-top: 30px;
    top: 50px;
    background-color: #ccc;
    width: 100%;
    z-index: 0;
  }

  li {
    float: none;
  }

  .hamburgerButton {
    background-color: #333;
    border-radius: 5px;
    position: fixed;
    top:5px;
    right: 5px;
    width:40px;
    height: 40px;
    z-index: 7;
    cursor: pointer;
    display: block;
  }
}

</style>
