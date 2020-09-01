import React from 'react'
import { shallow } from 'enzyme'
import Square from './Square'
import { constants } from '../constants'

const onMove = jest.fn()
const props = {position: constants.PLAYER_X, onMove }
describe('Square Component', ()=> {
  const wrapper = shallow(<Square {...props} />)

  it('Should render default player', () => {
    expect(wrapper.find('button').text()).toEqual(constants.PLAYER_X);
  })   

  it('should call onMove when click on Square', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(onMove).toHaveBeenCalledTimes(1)
  })
})
