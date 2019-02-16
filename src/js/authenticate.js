
import {globalStore} from '../main.js'
module.exports = require('https://unpkg.com/axios');

function checkUser() {
  axios.post(globalStore.phpPath + '/php/checkauth.php')
  .then(response => {
    console.log(response.data);
    if (response.data[0] === 'false') {
      window.location = '#/'
    }
  })
}
