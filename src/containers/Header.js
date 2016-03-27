import React from 'react'
import { connect } from 'react-redux'

let Header = () => {
  return <div className="header">
    <h1>Header</h1>
  </div>
}
Header = connect()(Header)

export default Header