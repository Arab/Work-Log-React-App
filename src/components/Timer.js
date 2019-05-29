import React from 'react';


const getSeconds = (secondsElapsed) => {
    return ('0' + secondsElapsed %60).slice(-2)
  }
const getMinutes = (secondsElapsed) => {
    if (secondsElapsed / 3600 < 0)
    {
      return ('0' + Math.floor(secondsElapsed /60)).slice(-2)
    }
    return ('0' + Math.floor((secondsElapsed % 3600) /60)).slice(-2)
    
    
  }
const getHours = (secondsElapsed) => {
    return ('0' + Math.floor(secondsElapsed /3600)).slice(-2)
  }


function Timer(props) {
  
    return (
        <h1>{getHours(props.secondsElapsed)}:{getMinutes(props.secondsElapsed)}:{getSeconds(props.secondsElapsed)}</h1>
    );
  }

export default Timer;