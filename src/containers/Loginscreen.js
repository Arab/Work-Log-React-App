import React, { Component } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { Auth } from '../services/Auth';
import { Reg } from '../services/Reg';


class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: true,
      loginError: false,
      doesLoginExist: false,
      doesEmailExist: false,
    }
  }


// metody strony LOGOWANIE REJESTRACJA

handleOnClickRegister = () => {
  this.setState({
    loginPage: false,
    loginError:false
  });
}

handleOnClickLogin = () => {
  this.setState({
    loginPage: true
  });
}

handleLoginSubmit = ({email, password}) => {
  const data = {
    login: email,
    password: password
  }
  Auth.login(data)
  .then(()=>{
    this.setState({loginError: false})
    this.props.handleLogin();
  }) 
  .catch(()=>this.setState({loginError:true}))
} 

handleRegisterSubmit = (values) => {
    Reg.Register(values)
    .then(response => {
      this.setState({
        doesLoginExist: false,
        doesEmailExist: false,
        loginPage:true
      })
      return response.data.message 
    })
    .catch(error => {
      let response = error.response;
      if(response.status === 401) { 
        this.setState({
          doesLoginExist: true,
          doesEmailExist: false
        })
        return response.data.message
      }
      if(response.status === 402) {
        
        this.setState({
          doesEmailExist: true,
          doesLoginExist: false
        })
        return response.data.message
      }
      if(response.status === 403) {
        
        this.setState({
          doesLoginExist: true,
          doesEmailExist: true
        })
        return response.data.message
      }
    }); 
};

 render() {
    return (
      <div className="loginscreen">
            {this.state.loginPage? <Login
            loginError={this.state.loginError} 
            handleOnClickRegister={this.handleOnClickRegister} 
            handleLoginSubmit={this.handleLoginSubmit}/>: <Register 
            doesLoginExist = {this.state.doesLoginExist}
            doesEmailExist = {this.state.doesEmailExist}
            handleRegisterSubmit={this.handleRegisterSubmit}
            handleOnClickLogin={this.handleOnClickLogin}
            />}
      </div>
    );
  };
};

export default Loginscreen;