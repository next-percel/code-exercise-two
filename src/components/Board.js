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
    if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
      return squares[0]
    }
    if (squares[3] && squares[3] === squares[4] && squares[3] === squares[5]) {
      return squares[3]
    }
    if (squares[6] && squares[6] === squares[7] && squares[6] === squares[8]) {
      return squares[6]
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
