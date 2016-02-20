'use strict'
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {ProductDetail} from '../app/components/product-detail.jsx'

describe('<ProductDetail/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<ProductDetail/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of product-detail', () => {
    const wrapper = shallow(<ProductDetail/>)
    expect(wrapper).to.have.className('product-detail')
  })
})
