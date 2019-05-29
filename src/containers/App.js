import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';
import Clock from './Clock';
import History from './History';
import SimpleMenu from './Menu';
import ApiAdress from '../const/const'
import { Auth } from '../services/Auth';
import { Logs } from '../services/Logs';
import { Reg } from '../services/Reg';


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
    Auth.authenticated() && this.setState({
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
  handleLoginSubmit = ({email, password}) => {
    const data = {
      login: email,
      password: password
  }
    
    Auth.login(data)
    .then(()=>{
      this.setState({
            loginError: false,
            isLoggedIn: true,
            clockPage: true})
    }) 
    .catch(()=>this.setState({loginError:true}))
   
   

  } 


  handleRegisterSubmit = (values) => {

      Reg.Register(values)
      .then(response => {
        console.log(response)
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
    const dataToSend = {
      start: stUTC,
      stop: etUTC,
      jwt: Auth.authenticated()
    }
    if(dataToSend.jwt) {
      Logs.create_log(dataToSend)
    }
  }



  // Metody menu

  handleMenuLogOutClick = () => {
    Auth.logout();
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




  