'use strict'
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {ProductList} from '../app/components/product-list.jsx'

describe('<ProductList/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<ProductList/>)
    expect(wrapper).to.be.ok
  })
  it('has a className of product-list', () => {
    const wrapper = shallow(<ProductList/>)
    expect(wrapper).to.have.className('product-list')
  })
})
