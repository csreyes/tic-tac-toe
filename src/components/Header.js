import React from 'react'
import { connect } from 'react-redux'

const Header = ({gameState, player}) => {
  let subheader;
  if (gameState === 'WINNER') {
    subheader = (<h2 className="message-subheader">{capitalize(player.concat(' wins!'))}</h2>)
  } else if (gameState === 'TIE') {
    subheader = (<h2 className="message-subheader">{capitalize('cat\'s game!')}</h2>)
  }

  return <div className="header">
    <h1>TIC-TAC-TOE</h1>
    {subheader}
  </div>
}

const capitalize = (string) => {
  return string.toUpperCase();
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    player: state.player
  }
}

export default connect(
  mapStateToProps
)(Header)