import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Checkout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="checkout"></div>
  )
}

reactMixin(Checkout.prototype, PureRenderMixin)(Checkout)
