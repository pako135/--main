//import axios from 'axios';

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