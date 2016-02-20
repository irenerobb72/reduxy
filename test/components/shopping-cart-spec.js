'use strict'
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {ShoppingCart} from '../app/src/components/shopping-cart.jsx'

describe('<ShoppingCart/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<ShoppingCart/>)
    expect(wrapper).to.be.ok
  })
})
