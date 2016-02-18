
import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="product-detail"></div>
  )
}

reactMixin(ProductDetail.prototype, PureRenderMixin)(ProdcutDetail)
