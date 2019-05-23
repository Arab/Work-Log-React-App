import React from 'react';
import './BtnStart.css'

function BtnStart(props) {
  
    return (
      <button className="BtnStart" onClick={props.handleStartClick}>
            <span>Start</span>
      </button>
    );
  }

export default BtnStart;