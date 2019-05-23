import React from 'react';
import './BtnPause.css'

function BtnPause(props) {
  
    return (
      <button className="BtnPause" onClick={props.handlePauseClick}>
            <span>Pause</span>
      </button>
    );
  }

export default BtnPause;