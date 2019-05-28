import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';
import Clock from './Clock';
import History from '../components/History';
import SimpleMenu from './Menu';
import ApiAdress from '../const/const'
import { object } from 'prop-types';


const ApiAdr = ApiAdress();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginPage: true,
      clockPage: false,
      historyPage: false,
      jwtToken: "",
      userLoginName: "",
      startDateTime: "",
      secondsElapsed: 0,
      isPaused: true,
      loginError: false,
      doesLoginExist: false,
      doesEmailExist: false,
      
    }
  }





  componentWillMount() {
    localStorage.getItem('jwtToken') && this.setState({
      jwtToken: JSON.parse(localStorage.getItem('jwtToken')),
      isLoggedIn: true,
      clockPage: true
    })


  }

  // metody strony LOGOWANIE REJESTRACJA
  handleOnClickRegister = () => {
    console.log("register cliced");
    this.setState({
      loginPage: false,
      loginError:false
    });
  }
  handleOnClickLogin = () => {
    console.log("login cliced");
    this.setState({
      loginPage: true
    });
  }
  handleLoginSubmit = (values) => {

    let res = new Response();
    fetch(ApiAdr + "login.php", { 
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "login": values.email,
          "password": values.password
        })
      })
      .then(response => {
            
            if(response.status !== 200) {
              this.setState({loginError:true})
            }
            return response.json();
            
      })
      .then(res => {
        if(res.message === "Login failed.") {
          return null
        }
        this.setState({
          jwtToken: res.jwt,
          loginError: false
        })
        if (res.jwt) {
          localStorage.setItem('jwtToken', JSON.stringify(this.state.jwtToken));
          this.setState({
            isLoggedIn: true,
            clockPage: true,
            loginError: false
          })
        }
      })      
      .catch(error => console.log(error));


      if(res) {
        
      }


  }

  handleRegisterSubmit = (values) => {
    console.log(values.login, values.email, values.password)
    fetch(ApiAdr + "create_user.php", {
      
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "login": values.login,
          "email": values.email,
          "password": values.password,
        })
      })
      .then(response => {
        if(response.status === 401) {
          
          this.setState({
            doesLoginExist: true,
            doesEmailExist: false
          })
          return response.json()
        }
        if(response.status === 402) {
          
          this.setState({
            doesEmailExist: true,
            doesLoginExist: false
          })
          return response.json()
        }
        if(response.status === 403) {
          
          this.setState({
            doesLoginExist: true,
            doesEmailExist: true
          })
          return response.json()
        }
        this.setState({
          doesLoginExist: false,
          doesEmailExist: false,
          loginPage:true
        })
        return response.json();
        
  })
      .catch(error => console.log('Auth failed: ' + error.message));

    
  }



  // Metody Zegara
  handleStartClick = () => {
    console.log("Start Clicked");
    if (this.state.secondsElapsed === 0) {
      let startDateTimeNow = new Date();

      this.setState({
        startDateTime: startDateTimeNow
      })
    }
    this.setState({
      isPaused: false
    });
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });
    }, 1000)
  }
  handlePauseClick = () => {
    console.log("Pause Clicked");
    this.setState({
      isPaused: true
    });
    clearInterval(this.incrementer);
  }
  handleStopClick = () => {
    console.log("Stop Clicked");
    this.setState({
      isPaused: true
    });
    clearInterval(this.incrementer);
    this.saveLog();
    //reset Time State
    this.setState({
      startDateTime: "",
      secondsElapsed: 0
    })
  }

  saveLog = () => {
    let startTime = new Date(this.state.startDateTime);
    let endTime = new Date(this.state.startDateTime);
    endTime.setSeconds(endTime.getSeconds() + this.state.secondsElapsed * 1);
    console.log("log saved " + startTime + " " + endTime);

    

    let stUTC = startTime.toJSON().slice(0,19).replace('T', ' ');
    let etUTC = endTime.toJSON().slice(0,19).replace('T', ' ');

    fetch(ApiAdr + "create_log.php", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "start": stUTC,
          "stop": etUTC,
          "jwt": this.state.jwtToken
        })
      })
      .then(response => response.json())
      .then(json => {
        console.log('Log created ' + json);
      })
      .catch(error => console.log('Auth failed: ' + error.message));
  }



  // Metody menu

  handleMenuLogOutClick = () => {
    console.log("logged out")
    localStorage.removeItem("jwtToken");
    this.setState({
      jwtToken: "",
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

  // Metody dla historii



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


            <Clock 
            secondsElapsed = {this.state.secondsElapsed}
            handleStartClick = {this.handleStartClick}
            handlePauseClick = {this.handlePauseClick}
            handleStopClick = {this.handleStopClick}
            isPaused = {this.state.isPaused}
            /> :
            (
              this.state.historyPage ? < History jwtToken = {
                this.state.jwtToken
              }
              />: <div> Sth gone totaly wrong </div>
            )

          ) :


          <Loginscreen
            loginPage = {this.state.loginPage}
            loginError = {this.state.loginError}
            doesLoginExist = {this.state.doesLoginExist}
            doesEmailExist = {this.state.doesEmailExist}
            handleOnClickRegister = {this.handleOnClickRegister}
            handleOnClickLogin = {this.handleOnClickLogin}
            handleLoginSubmit = {this.handleLoginSubmit}
            handleRegisterSubmit = {this.handleRegisterSubmit}
        />} </div >
      );
    }
  }
  export default App;




  