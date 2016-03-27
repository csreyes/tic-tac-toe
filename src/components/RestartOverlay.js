import React from 'react'

const RestartOverlay = ({gameState, onRestartOverlayClick}) => {
  if (gameState === 'WINNER' || gameState === 'TIE') {
    return (<div className="restart-overlay" onClick={onRestartOverlayClick}/>)
  } else {
    return (<div></div>)
  }
}

export default RestartOverlay