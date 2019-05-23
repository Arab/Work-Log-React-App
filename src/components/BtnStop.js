import React from 'react';
import './BtnStop.css'

function BtnStop(props) {
  
    return (
      <button className="BtnStop" onClick={props.handleStopClick}>
            <span>Stop</span>
      </button>
    );
  }

export default BtnStop;