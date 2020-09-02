import React, { useState } from 'react'
import Square from './Square'
import { constants } from '../constants'
import { getWinner, isBoardFilled } from './gameScore'

const boardStyle = {
  border: '4px solid',
  width: '250px',
  height: '250px',
  margin: '5px auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)'
}

const buttonStyle = {
  border: '2px solid',
  fontSize:'20px',
  fontWeight: '800',
}

const Board = () => {
  const emptyBoard = Array(constants.TOTAL_SQUARES).fill(null);
  const firstPlayer = constants.PLAYER_X
  
  const [squares, setSquares] = useState(emptyBoard)
  const [activePlayer, setActivePlayer] = useState(firstPlayer)
  
  const isFilledSquare = (filledSquare, position) => !!filledSquare[position]

  const getNextPayer = () => activePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X

  const winner = getWinner(squares)

  const getGameStatus = () => {
    if (winner) {
      return `${winner} ${constants.GAME_WIN}`
    }
    if (isBoardFilled(squares)) {
      return `${constants.GAME_DRAW}`
    }
    return `${constants.CURRENT_PLAYER}: ${activePlayer}`
  }

  const handleMove = position => {
    const filledSquare = [...squares]
    if (winner || isFilledSquare(filledSquare, position)) return

    filledSquare[position] = activePlayer    
    setSquares(filledSquare)
    setActivePlayer(getNextPayer())    
  }

  const resetBoard = () => {
    setSquares(emptyBoard)
    setActivePlayer(firstPlayer)
  }

  return (
    <>
      <div>{getGameStatus()}</div>
      <div style={boardStyle}>
        {squares.map((square, position) => (
          <Square key={position} move={square} onMove={() => handleMove(position)} />
        ))}
      </div>
      <button style={buttonStyle} onClick={resetBoard}>{constants.GAME_RESTART}</button> 
    </>
  )
}

export default Board
