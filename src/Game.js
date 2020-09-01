import React from 'react'
import { constants } from './constants'
import Board from './components/Board'

const gameStyle = {
  textAlign: 'center',
  fontSize:'20px',
  fontWeight: '800',
  width: '263px',
  margin: '20px auto'
}

const Game = () => (
  <div style={gameStyle} >
    <h2>{constants.GAME_TITLE}</h2>
    <Board />
  </div>
)

export default Game
