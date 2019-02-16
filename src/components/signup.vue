<template>
  <div id="app">
    <div class="loginContainer">
      <div class="signupHeader">
        <h3>Enter your Information:</h3>
      </div>
      <div class="signupInput">
        <p>User Name</p>
        <input type="text" name="signup_username" value="" v-model="signup_username" class="required">
        <p>Password</p>
        <input type="password" name="signup_password" value="" v-model="signup_password" class="required">
        <p>Verify Password</p>
        <input type="password" name="signup_vPassword" value="" v-model="signup_vPassword" class="required">
        <p>Email</p>
        <input type="email" name="signup_email" value="" v-model="signup_email" class="required">
        <p class="errorMessage">{{errorMessage}}</p>
        <input type="button" name="signup" value="Sign up" v-on:click="validateSignup">
        <p class="center">Or, already have an account?</p>
        <input type="button" name="submit" value="Go to Login" v-on:click="$emit('swapLogin')">
      </div>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'

export default {
  name: 'signup_app',
  data () {
    return {
      signup_username: '',
      signup_password: '',
      signup_vPassword: '',
      signup_email: '',
      errorMessage: ''
    }
  },
  methods: {
    validateSignup: function () {
      var inputs = document.getElementsByClassName('required')
      var error = false
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
          inputs[i].style = "border-bottom: 1px Solid Red"
          error = true
        }
      }
      if (this.signup_password != this.signup_vPassword) {
        error = true;
        var passInput = document.getElementsByClassName('pass')
        for (var i = 0; i < passInput.length; i++) {
          passInput[i].style = "border-bottom: 1px solid Red"
        }
      }
      if (!error) {
        var params = new URLSearchParams()
        params.append('username', this.signup_username)
        params.append('password', this.signup_password)
        params.append('vPassword', this.signup_vPassword)
        params.append('email', this.signup_email)
        axios.defaults.withCredentials = true;
        axios.post(globalStore.phpPath + '/php/addUser.php', params)
        .then(response => {
          console.log(response.data);
          if (response.data[0] === 'Account created successfully.') {
            this.errorMessage = response.data[0];
            for (var i = 0; i < inputs.length; i++) {
              if (inputs[i].value === '') {
                inputs[i].style = "border-bottom: 1px Solid green"
              }
            }
          } else {
            this.errorMessage = response.data[0];
            for (var i = 0; i < inputs.length; i++) {
              if (inputs[i].value === '') {
                inputs[i].style = "border-bottom: 1px Solid red"
              }
            }
          }
        })
      }
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

.signupHeader h3 {
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
  margin: 10px 0px;
}

.center {
  text-align: center;
}

.signupInput input{
  width: 100%;
  height: 30px;
  margin: 5px 0px;
  border: none;
  padding: 0px;
  text-indent: 10px;
  background-color: #eee;
  border-bottom: 1px solid white;
}

input:focus {
  outline: none;
  background-color: LightBlue !important;
}

.signupInput input[type=button] {
  background-color: #ccc;
  font-size: 16px;
  cursor: pointer;
}

.signupInput input[type=button]:hover {
  background-color: LightBlue;
}
</style>
