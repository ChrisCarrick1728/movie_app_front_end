<template>
  <div id="app">
    <div class="loginContainer">
      <div class="loginHeader">
        <h3>Please Sign in:</h3>
      </div>
      <div class="loginInput">
        <p>Username:</p>
        <input type="text" name="logon_username" value="" v-model="logon_username">
        <p>Password:</p>
        <input type="password" name="logon_password" value="" v-model="logon_password">
        <input type="button" name="submit" value="Login" v-on:click="validateLogon">
        <p class="center">Or</p>
        <input type="button" name="signup" value="Sign up" v-on:click="$emit('swapLogin')">
      </div>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'

export default {
  name: 'loginComp_app',
  data () {
    return {
      logon_username: '',
      logon_password: ''
    }
  },
  methods: {
    validateLogon: function () {
      console.log('login attempted')
      console.log(globalStore.phpPath)
      var params = new URLSearchParams()
      params.append('userName', this.logon_username)
      params.append('password', this.logon_password)
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/checkUser.php', params)
      .then(response => {
        console.log(response.data);
        if (response.data[0] === 'true') {
          window.location = '#/home'
        }
      })
      //window.location = '#/home'
    }
  }
}
</script>

<style scoped>
.loginContainer {
  width: 90%;
  max-width: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.loginHeader h3 {
  font-family: sans-serif;
  font-weight: lighter;
  text-indent: 10px;
  padding: 10px 0px;
  border-bottom: 1px solid #333;
}

p {
  font-family: sans-serif;
  font-weight: lighter;
  text-align: left;
  font-size: 12px;
  text-indent: 10px;
  margin: 10px 0px 0px;
  color: #555;
}

.center {
  text-align: center;
}

.loginInput input {
  width: 100%;
  height: 30px;
  margin: 5px 0px;
  border: none;
  padding: 0px;
  text-indent: 10px;
  background-color: #eee;
}

input:focus {
  outline: none;
  background-color: LightBlue !important;
}

.loginInput input[type=button]{
  background-color: #ccc;
  font-size: 16px;
  cursor: pointer;
}

.loginInput input[type=button]:hover {
  background-color: LightBlue;
}
</style>
