import React from 'react'
import { shallow } from 'enzyme'
import Game from './Game'
import { constants } from './constants'
import Board from './components/Board'

describe('Game Component', () => {
  const wrapper = shallow(<Game />)
  it('should render the title as Tic Tac Toe', ()=> {
    expect(wrapper.find('h2').text()).toBe(constants.GAME_TITLE)
  })

  it('should render Board component', ()=> {
    expect(wrapper.find(Board).length).toEqual(1)
  })
})
