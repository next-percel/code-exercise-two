import React, { useState } from 'react'
import Square from './Square'
import { constants } from '../constants'

const boardStyle = {
  border: '4px solid',
  width: '250px',
  height: '250px',
  margin: '5px auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'
}

const Board = () => {
  const emptyBoard = Array(constants.TOTAL_SQUARES).fill(null);
  const [squares, setSquares] = useState(emptyBoard)
  const [activePlayer, setActivePlayer] = useState(constants.PLAYER_X)
  const [gameStatus, setGameStatus] = useState(`${constants.GAME_START}, ${constants.NEXT_PLAYER}: ${constants.PLAYER_X}`)

  const getWinner = squares => {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let winPosition = 0; winPosition < winPositions.length; winPosition++) {
      const [position1, position2, position3] = winPositions[winPosition];
      
      const firstPositionFilled = squares[position1]
      const matchWithSecondPosition = squares[position1] === squares[position2]
      const matchWithThirdPosition = squares[position1] === squares[position3]
      
      if (firstPositionFilled && matchWithSecondPosition && matchWithThirdPosition) {
        return firstPositionFilled;
      }
    }
    return null
  }
  
  const isFilledSquare = (filledSquare, index) => filledSquare[index]

  const getNextPayer = () => activePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X

  const winner = getWinner(squares)
  const getStatus = () => {
    if (winner) {
      return `${constants.GAME_OVER}: ${winner} ${constants.GAME_WIN}`
    }
    else {
      return gameStatus
    }
  }

  const handleMove = index => {
    const filledSquare = [...squares]
    setGameStatus(winner)
    if (winner || isFilledSquare(filledSquare, index)) return

    filledSquare[index] = activePlayer    
    setSquares(filledSquare)
    setActivePlayer(getNextPayer())    
    setGameStatus(`${constants.NEXT_PLAYER}: ${getNextPayer()}`)
  }

  return (
    <>
      <div>{getStatus()}</div>
      <div style={boardStyle}>
        {squares.map((square, index) => (
          <Square key={index} position={square} onMove={() => handleMove(index)} />
        ))}
      </div>
    </>
  )
}

export default Board
