import React from 'react'
import { shallow } from 'enzyme'
import Game from './Game'

describe('Game Component', () => {
  const wrapper = shallow(<Game />)
  it('should render the title as Tic Tac Toe', ()=> {
    expect(wrapper.find('h2').text()).toBe('Tic Tac Toe')
  })
})
