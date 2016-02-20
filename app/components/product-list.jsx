import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {products} from './reducer'

export class ProductList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {products} = this.props
    const productArray = products.map((r, idx) => {
      return <Product name={idx} qty:{r} />
    })
    return (
      <div className="product-list">
        <h6>{this.props.name}</h6>
      </div>
  )
}

reactMixin(ProductList.prototype, PureRenderMixin)(ProdcutList)
