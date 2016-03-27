import React, { PropTypes } from 'react'

const Square = ({squareProps, player, onSquareClick}) => {
  let value, onClick, className;

  className = squareProps.class.concat(' col-md-4 col-xs-4 col-s-4');

  if (squareProps.value) {
    value = (<div className={squareProps.value}></div>)
    onClick = null;
  } else {
    onClick = onSquareClick.bind(null, squareProps.key, player)
    value = null;
  }

  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  )
}

export default Square