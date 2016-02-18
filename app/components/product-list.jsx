import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class ProductList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="product-list"></div>
  )
}

reactMixin(ProductList.prototype, PureRenderMixin)(ProdcutList)
