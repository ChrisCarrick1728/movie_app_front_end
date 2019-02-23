<template>
  <div id="app">
    <div class="loginContainer">
      <div class="signupHeader">
        <h3>Enter your Information</h3>
      </div>
      <div class="signupInput">
        <p>User Name</p>
        <input type="text" name="signup_username" value="" v-model="signup_username" class="required textBox">
        <p>Password</p>
        <input type="password" name="signup_password" value="" v-model="signup_password" class="required textBox pass">
        <p>Verify Password</p>
        <input type="password" name="signup_vPassword" value="" v-model="signup_vPassword" class="required textBox pass">
        <p>Email</p>
        <input type="email" name="signup_email" value="" v-model="signup_email" class="required textBox">
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
          passInput[i].style = "border-bottom: 1px Solid Red"
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

.signupHeader h3 {
  font-family: sans-serif;
  font-weight: lighter;
  text-align: center;
  border-bottom: 1px solid #333;
  color: white;
}

.signupInput p {
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

.signupInput input {
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
  height:28px !important;
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

.signupInput input[type=button]{
  background-color: #333;
  cursor: pointer;
  padding: 1px;
}

.signupInput input[type=button]:hover {
  background-color: OliveDrab;
  box-shadow: 3px 3px 5px Black;
}
</style>
