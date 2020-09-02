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
  const isGameWon = isWon(squares)

  const isFilledSquare = (squares, position) => !!squares[position]

  const togglePlayer = activePlayer => activePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X

  const registerMove = (filledSquare, position) => filledSquare[position] = activePlayer    
  
  const updateBoard = filledSquare => {
    setSquares(filledSquare)
    setActivePlayer(prevActivePlayer => prevActivePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X)    
  }

  const handleMove = position => {
    const filledSquare = [...squares]
    if (isGameWon || isFilledSquare(squares, position)) return

    registerMove(filledSquare, position)
    updateBoard(filledSquare)
  }

  const resetBoard = () => {
    setSquares(emptyBoard)
    setActivePlayer(firstPlayer)
  }
  
  const getGameStatus = () => {
    const winner = togglePlayer(activePlayer)
    if (isGameWon) {
      return `${winner} ${constants.GAME_WIN}`
    }
    if (isDraw(isGameWon, squares)) {
      return `${constants.GAME_DRAW}`
    }
    return `${constants.CURRENT_PLAYER}: ${activePlayer}`
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
