import React from 'react';
import { shallow } from 'enzyme'
import Board from './Board'
import Square from './Square'
import { constants } from '../constants'

describe('Board Component', ()=> {
  const wrapper = shallow(<Board />)

  it('Should render 9 Square in the Board', () => {
    expect(wrapper.find(Square).length).toEqual(constants.TOTAL_SQUARES)
    expect(wrapper.find(Square).at(0).props()).toEqual({
      position: null,
      onMove: expect.any(Function)
    })
  })

  it('Should display status as Start game, Next Player: X', () => {
    expect(wrapper.find('div').at(0).text()).toEqual(`${constants.GAME_START}, ${constants.NEXT_PLAYER}: ${constants.PLAYER_X}`)
  })

  it('Should display status as Next Player: O', () => {
    wrapper.find(Square).at(0).simulate('move')
    expect(wrapper.find('div').at(0).text()).toEqual(`${constants.NEXT_PLAYER}: ${constants.PLAYER_O}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in first row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in first row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in second row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in second row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in third row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(6).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in third row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in first column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in first column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in second column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in second column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in third column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in third column', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in first diagonal (top-left to bottom-right)', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in first diagonal (top-left to bottom-right)', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: X win" if player X fill three squares in second diagonal (top-right to bottom-left)', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_X} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: O win" if player O fill three squares in second diagonal (top-right to bottom-left)', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.PLAYER_O} ${constants.GAME_WIN}`)
  })

  it('Should display status as "Game Over: Draw" If all nine squares are filled and neither player has three in a row', () => {
    const wrapper = shallow(<Board />)
    wrapper.find(Square).at(0).simulate('move')
    wrapper.find(Square).at(2).simulate('move')
    wrapper.find(Square).at(1).simulate('move')
    wrapper.find(Square).at(3).simulate('move')
    wrapper.find(Square).at(5).simulate('move')
    wrapper.find(Square).at(4).simulate('move')
    wrapper.find(Square).at(6).simulate('move')
    wrapper.find(Square).at(7).simulate('move')
    wrapper.find(Square).at(8).simulate('move')
    expect(
      wrapper.find('div').at(0).text()
    ).toEqual(`${constants.GAME_OVER}: ${constants.GAME_DRAW}`)
  })
})
