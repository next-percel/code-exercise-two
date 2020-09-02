import React from 'react'
import { shallow } from 'enzyme'
import Square from './Square'
import { constants } from '../constants'

const onMove = jest.fn()
const props = {move: constants.PLAYER_X, onMove }
describe('Square Component', ()=> {
  const wrapper = shallow(<Square {...props} />)

  it('should render player move', () => {
    expect(wrapper.find('button').text()).toEqual(constants.PLAYER_X)
  })   

  it('should call onMove when click on Square', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(onMove).toHaveBeenCalledTimes(1)
  })
})
