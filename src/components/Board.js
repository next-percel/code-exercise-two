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
  
  const isFilledSquare = (filledSquare, index) => filledSquare[index]

  const handleMove = index => {
    const filledSquare = [...squares]
    if (isFilledSquare(filledSquare, index)) return

    filledSquare[index] = activePlayer
    setSquares(filledSquare)
    setGameStatus(`${constants.NEXT_PLAYER}: ${constants.PLAYER_X}`)
  }

  return (
    <>
      <div>{gameStatus}</div>
      <div style={boardStyle}>
        {squares.map((square, index) => (
          <Square key={index} position={square} onMove={() => handleMove(index)} />
        ))}
      </div>
    </>
  )
}

export default Board
