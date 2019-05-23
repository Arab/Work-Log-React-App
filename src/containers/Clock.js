import React, { Component } from 'react';
import BtnStart from '../components/BtnStart';
import BtnPause from '../components/BtnPause';
import BtnStop from '../components/BtnStop';
import './Clock.css'
import Notifications from '../components/Notifications'





class Clock extends Component {
  
  getSeconds() {
    return ('0' + this.props.secondsElapsed %60).slice(-2)
  }
  getMinutes() {
    if (this.props.secondsElapsed / 3600 < 0)
    {
      return ('0' + Math.floor(this.props.secondsElapsed /60)).slice(-2)
    }
    return ('0' + Math.floor((this.props.secondsElapsed % 3600) /60)).slice(-2)
    
    
  }
  getHours() {
    return ('0' + Math.floor(this.props.secondsElapsed /3600)).slice(-2)
  }



  render() {
    return (
      
      
      <div className="ClockWrapper">
        <h1>{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h1>
        <div className="BtnWrapper">
              {this.props.isPaused?<BtnStart handleStartClick={this.props.handleStartClick}/>:<BtnPause handlePauseClick={this.props.handlePauseClick}/> }
              
              
              <BtnStop handleStopClick={this.props.handleStopClick}/>
        </div>


        {/* <Notifications /> */}
      </div>
      
    );
  }
}

export default Clock;