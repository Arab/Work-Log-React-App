import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';
import Clock from './Clock';
import History from './History';
import SimpleMenu from './Menu';
import { Auth } from '../services/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginPage: true,
      clockPage: false,
      historyPage: false,
      userLoginName: "",
      loginError: false,
      doesLoginExist: false,
      doesEmailExist: false,
      
    }
  }

  componentWillMount() {
    Auth.authenticated() && this.setState({
      isLoggedIn: true,
      clockPage: true
    })


  }

//metoda dla Login screen

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
      clockPage: true})
  }

  // Metody menu

  handleMenuLogOutClick = () => {
    Auth.logout();
    this.setState({
      isLoggedIn: false,
      clockPage: true
    })
  }
  handleMenuHistoryClick = () => {
    this.setState({
      historyPage: true,
      clockPage: false
    })
  }
  handleMenuClockClick = () => {
    this.setState({
      historyPage: false,
      clockPage: true
    })
  }

  render() {
    return ( 
    
    <div className = "App" > {
        this.state.isLoggedIn ? < div className = "menuBtn" > < SimpleMenu
        handleMenuLogOutClick = {
          this.handleMenuLogOutClick
        }
        handleMenuHistoryClick = {
          this.handleMenuHistoryClick
        }
        handleMenuClockClick = {
          this.handleMenuClockClick
        }
        /></div > : null
      } {
        this.state.isLoggedIn ? (this.state.clockPage ?
            <Clock /> :
            (
              this.state.historyPage ? < History />: <div> Sth gone totaly wrong </div>
            )

          ) :
          <Loginscreen handleLogin = {this.handleLogin}
          />} 
      </div >
      );
    }
  }
  export default App;




  