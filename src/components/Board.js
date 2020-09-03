import React, { useState } from 'react'
import Square from './Square'
import { constants } from '../constants'
import { isWon, isDraw } from '../utils/gameStatus'

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
  const emptyBoard = Array(constants.TOTAL_SQUARES).fill(null)
  const firstPlayer = constants.PLAYER_X
  const [squares, setSquares] = useState(emptyBoard)
  const [activePlayer, setActivePlayer] = useState(firstPlayer)
  const [winner, setWinner] = useState(null)
  const isGameWon = isWon(squares)
  
  const isFilledSquare = (squares, position) => !!squares[position]

  const getGameStatus = () => {
    if (isGameWon) {
      return `${winner} ${constants.GAME_WIN}`
    }
    if (isDraw(isGameWon, squares)) {
      return `${constants.GAME_DRAW}: ${activePlayer}`
    }
    return `${constants.CURRENT_PLAYER}: ${activePlayer}`
  }

  const registerMove = (position) => {
    const filledSquare = [...squares]
    filledSquare[position] = activePlayer    
    setSquares(filledSquare)
  }

  const handleMove = position => {
    if (isGameWon || isFilledSquare(squares, position)) return

    registerMove(position)
    setWinner(activePlayer)
    setActivePlayer(prevActivePlayer => prevActivePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X)    
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
