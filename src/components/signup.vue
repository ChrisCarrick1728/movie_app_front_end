<template>
  <div id="app">
    <div class="loginContainer">
      <div class="signupHeader">
        <h3>Enter your Information:</h3>
      </div>
      <div class="signupInput">
        <input type="text" name="signup_username" value="" v-model="signup_username" placeholder="User Name...">
        <input type="password" name="signup_password" value="" v-model="signup_password" placeholder="Password...">
        <input type="password" name="signup_vPassword" value="" v-model="signup_vPassword" placeholder="Verify Password...">
        <input type="email" name="signup_email" value="" v-model="signup_email" placeholder="Enter Email...">
        <input type="button" name="signup" value="Sign up" v-on:click="validateSignup">
        <p>Or, already have an account?</p>
        <input type="button" name="submit" value="Go to Login" v-on:click="$emit('swapLogin')">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      signup_username: '',
      signup_password: '',
      signup_vPassword: '',
      signup_email: ''
    }
  },
  methods: {
    validateSignup: function () {
      console.log('user signup')
    }
  }
}
</script>

<style>
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

.signupInput p {
  font-family: sans-serif;
  font-weight: lighter;
  text-align: center;
  font-size: 12px;
}

.signupInput input{
  width: 100%;
  height: 30px;
  margin: 10px 0px;
  border: none;
  padding: 0px;
  text-indent: 10px;
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
