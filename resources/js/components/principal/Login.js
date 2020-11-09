import React, { Component } from 'react';
import LoginInfoPidi from './../secondary/Login/LoginInfoPidi.js';
import LoginForm from './../secondary/Login/LoginForm.js';



class Login extends Component {
  render() {
    return (
      <div>
        <div className='wrapperLogin'>
            <LoginInfoPidi></LoginInfoPidi>
            <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}

export default Login;
