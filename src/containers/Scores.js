import React from 'react'
import { connect } from 'react-redux'

let Scores = () => {
  return <div className="scores">
    <h1></h1>
  </div>
}
Scores = connect()(Scores)

export default Scores