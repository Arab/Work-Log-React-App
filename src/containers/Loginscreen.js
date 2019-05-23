import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
function Loginscreen(props) {
  
 
    return (
      <div className="loginscreen">
            {props.loginPage? <Login
            loginError={props.loginError} 
            handleOnClickRegister={props.handleOnClickRegister} 
            handleLoginSubmit={props.handleLoginSubmit}/>: <Register 
            doesLoginExist = {props.doesLoginExist}
            doesEmailExist = {props.doesEmailExist}
            handleRegisterSubmit={props.handleRegisterSubmit}
            handleOnClickLogin={props.handleOnClickLogin}
            />}
      </div>
    );
  
}

export default Loginscreen;