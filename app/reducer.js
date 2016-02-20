import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', qty: 0},
    {id: 2, name:'gold', qty: 0},
    {id: 3, name:'rake', qty: 0},
    {id: 4, name:'car', qty: 0},
    {id: 5, name:'falcon', qty: 0}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'DELETE_PRODUCT_FROM_CART':
      return state.set('cart', state.get('cart').push(action.id))
    default:
      return state
  }
}
