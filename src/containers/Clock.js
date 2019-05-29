import React, { Component } from 'react';
import BtnStart from '../components/BtnStart';
import BtnPause from '../components/BtnPause';
import BtnStop from '../components/BtnStop';
import './Clock.css'
import Notifications from '../components/Notifications'
import Timer from '../components/Timer'
import { Logs } from '../services/Logs';
import { Auth } from '../services/Auth';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDateTime: "",
      secondsElapsed: 0,
      isPaused: true 
    }
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

  render() {
    return (
      <div className="ClockWrapper">
        
        <Timer secondsElapsed = {this.state.secondsElapsed}/>
        <div className="BtnWrapper">
              {this.state.isPaused?<BtnStart handleStartClick={this.handleStartClick}/>:<BtnPause handlePauseClick={this.handlePauseClick}/> }
              
              
              <BtnStop handleStopClick={this.handleStopClick}/>
        </div>

        {/* <Notifications /> */}
      </div>
    );
  }
}

export default Clock;