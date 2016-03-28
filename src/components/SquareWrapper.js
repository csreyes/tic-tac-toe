// Component that outputs 3x3 bootrstrap grid
import React from 'react'
import Square from './Square'
import Row from './Row'

const layoutSquares = (board, player, onSquareClick) => {
  var result = [];

  var row = 0;
  var columns = [];
  for (var i = 0; i < board.length; i++) {
    if (i === 3 || i === 6) {
      result.push((<Row columns={columns} key={row}/>));
      row++
      columns = [];
    }
    columns.push((<Square squareProps={board[i]} player={player} onSquareClick={onSquareClick} key={i}/>))
  }
  // at the end of loop, wrap the last column in row and push to results
  result.push((<Row columns={columns} key={row}/>))

  return result
}

const SquareWrapper = ({board, player, onSquareClick}) => {
  let squares = layoutSquares(board, player, onSquareClick);

  return <div className="board container-fluid">
    {squares}
  </div>
}


export default SquareWrapper