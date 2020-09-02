import React from 'react'
import { shallow } from 'enzyme'
import Board from './Board'
import Square from './Square'
import { constants } from '../constants'

const getWrapper = () => {
  return shallow(<Board />)
} 

const playerX = {
  move: (position, wrapper) => {
    wrapper.find(Square).at(position).simulate('move')
  }
}

const playerO = {
  move: (position, wrapper) => {
    wrapper.find(Square).at(position).simulate('move')
  }
}

const simulateMove = (wrapper, positions) => {
  for (let position=0;position<positions.length;position++) {
    if (position % 2) {
      playerO.move(positions[position], wrapper)
    }
    else {
      playerX.move(positions[position], wrapper)
    }
  }  
}

const INITIAL_STATUS = `${constants.CURRENT_PLAYER}: ${constants.PLAYER_X}`
const PLAYER_X_WIN = `${constants.PLAYER_X} ${constants.GAME_WIN}`
const PLAYER_O_WIN = `${constants.PLAYER_O} ${constants.GAME_WIN}`

describe('Board Component', ()=> {
  const wrapper = getWrapper()

  it('Should render 9 Square in the Board', () => {
    expect(wrapper.find(Square).length).toEqual(constants.TOTAL_SQUARES)
    expect(wrapper.find(Square).at(0).props()).toEqual({
      move: null,
      onMove: expect.any(Function)
    })
  })

  it('Should display status as Current Player: X', () => {
    expect(wrapper.find('div').at(0).text()).toEqual(INITIAL_STATUS)
  })

  it('Should render same move if player click twice on the same square', () => {
    const wrapper = getWrapper()
    playerX.move(0, wrapper)
    expect(wrapper.find(Square).at(0).prop('move')).toEqual(constants.PLAYER_X)
    playerX.move(0, wrapper)
    expect(wrapper.find(Square).at(0).prop('move')).toEqual(constants.PLAYER_X)
  })

  it('Should render player move in sqaure if user click on it', () => {
    const wrapper = getWrapper()
    playerX.move(0, wrapper)
    expect(wrapper.find(Square).at(0).prop('move')).toEqual(constants.PLAYER_X)
    playerO.move(1, wrapper)
    expect(wrapper.find(Square).at(1).prop('move')).toEqual(constants.PLAYER_O)
  })

  it('Should display status as "X win" if player X fill three squares in first row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 4, 1, 5, 2])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in first row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [3, 0, 4, 1, 6, 2])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in second row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [3, 1, 4, 2, 5])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in second row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 3, 1, 4, 8, 5])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in third row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [6, 4, 7, 5, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in third row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [3, 6, 4, 7, 2, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in first column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 4, 3, 5, 6])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in first column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [1, 0, 4, 3, 8, 6])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in second column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [1, 2, 4, 5, 7])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in second column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 1, 3, 4, 8, 7])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in third column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [2, 1, 5, 4, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in third column', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [1, 2, 4, 5, 6, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in first diagonal (top-left to bottom-right)', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 1, 4, 2, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in first diagonal (top-left to bottom-right)', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [1, 0, 2, 4, 5, 8])

    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "X win" if player X fill three squares in second diagonal (top-right to bottom-left)', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [2, 5, 4, 7, 6])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_X_WIN)
  })

  it('Should display status as "O win" if player O fill three squares in second diagonal (top-right to bottom-left)', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [1, 2, 0, 4, 3, 6])
    expect(wrapper.find('div').at(0).text()).toEqual(PLAYER_O_WIN)
  })

  it('Should display status as "Game Draw" If all nine squares are filled and neither player has three in a row', () => {
    const wrapper = getWrapper()
    simulateMove(wrapper, [0, 2, 1, 3, 5, 4, 6, 7, 8])
    expect(wrapper.find('div').at(0).text()).toEqual(`${constants.GAME_DRAW}`)
  })

  it('Should display status as "Current Player: X" If restart game button is clicked', () => {
    const wrapper = getWrapper()
    wrapper.find('button').simulate('click')
    expect(wrapper.find('div').at(0).text()).toEqual(INITIAL_STATUS)
  })
})
