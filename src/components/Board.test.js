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
})
