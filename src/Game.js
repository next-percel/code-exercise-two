import React from 'react'
import { constants } from './constants'

const gameStyle = {
  fontSize:'20px',
  fontWeight: '800',
  width: '200px',
  margin: '20px auto'
}

const Game = () => (
  <div style={gameStyle} >
    <h2>{constants.GAME_TITLE}</h2>
  </div>
)

export default Game
