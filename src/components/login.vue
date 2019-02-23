<template>
  <div id="app">
    <div class="loginContainer">
      <div class="loginHeader">
        <h3>Please Sign in</h3>
      </div>
      <div class="loginInput">
        <p>User Name</p>
        <input type="text" name="logon_username" value="" v-model="logon_username" class="textBox">
        <p>Password</p>
        <input type="password" name="logon_password" value="" v-model="logon_password" class="textBox">
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
          window.location = '#/browse'
        }
      })
      //window.location = '#/home'
    }
  }
}
</script>

<style scoped>

#app {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.loginContainer {
  width: 90%;
  max-width: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #333;
  box-shadow: 3px 3px 5px Black;
  padding: 20px;

}

.loginHeader h3 {
  font-family: sans-serif;
  font-weight: lighter;
  text-align: center;
  border-bottom: 1px solid #333;
  color: white;
}

.loginInput p {
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 12px;
  margin: 10px 0px 0px;
  color: white;
}
.center {
  text-align: center;
  margin: 10px 0px 5px !important;
}

.loginInput input {
  background-color: #333;
  height:30px;
  outline: none;
  color: white;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #555;
  cursor: pointer;
  margin-top: 5px;
  padding: 0px;
}

.textBox {
  width: 100% !important;
  height: 28px !important;
  text-indent: 10px;
  cursor: text !important;
}

.textBox:hover {
  background-color: #222;
  box-shadow: 3px 3px 5px Black;
}

input:focus {
  outline: none;
  background-color: #222 !important;
}

.loginInput input[type=button]{
  background-color: #333;
  cursor: pointer;
  padding: 1px;
}

.loginInput input[type=button]:hover {
  background-color: OliveDrab;
  box-shadow: 3px 3px 5px Black;
}
</style>
