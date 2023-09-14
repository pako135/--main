//import axios from 'axios';
var interval = self.setInterval("clock()", 1000);
function clock(){
  var date = new Date();
  var hourOffset = 3;
  date.setUTCHours(date.getUTCHours(), date.getUTCMinutes());
  var time = date.getTime();
  date.setUTCFullYear(date.getUTCFullYear(), 2, 22);
  var dstStart = date.getTime();
  date.setUTCFullYear(date.getUTCFullYear(), 8, 22);
  var dstEnd = date.getTime();
  if(time > dstStart && time < dstEnd)hourOffset = 3;
  date.setUTCHours(date.getUTCHours()+hourOffset, date.getUTCMinutes()+30);
  var output = date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds();    document.getElementById("clock").innerHTML=output;
}
const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs'); // node
function handleSignIn(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const data = {
      email,
      password,
    };
  
    axios.post('/sign-in', data)
      .then(function (response) {
        if (response.status === 200) {
          window.location.href = '/home';
        } else {
          alert('Sign in failed');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  function handleSignUp(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const data = {
      username,
      email,
      password,
    };
  
    axios.post('/sign-up', data)
      .then(function (response) {
        if (response.status === 200) {
          window.location.href = '/home';
        } else {
          alert('Sign up failed');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  function handlePasswordRecovery(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
  
    const data = {
      email,
    };
  
    axios.post('/password-recovery', data)
      .then(function (response) {
        if (response.status === 200) {
          alert('A password reset link has been sent to your email.');
        } else {
          alert('Password recovery failed');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }