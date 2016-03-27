import React, { Component } from 'react'

class Score extends Component {
  render() {
    const score = this.props.score
      return (
        <div className="container-fluid">
          <div className="score row">
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <h3 className="score-heading">PLAYER 1 (X)</h3>
              <h4 className="score-value">{score.player1}</h4>
            </div>
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <h3 className="score-heading">TIES</h3>
              <h4 className="score-value">{score.ties}</h4>
            </div>
            <div className="score-container col-md-4 col-xs-4 col-s-4">
              <h3 className="score-heading">PLAYER 2 (O)</h3>
              <h4 className="score-value">{score.player2}</h4>
            </div>
          </div>
        </div>
      )
  }
}

export default Score