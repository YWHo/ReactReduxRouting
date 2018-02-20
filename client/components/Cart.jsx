import React from 'react'
import {connect} from 'react-redux'
import {removePetFromCart, clearCart} from '../actions/cart'

function Cart ({cart, dispatch}) {
  console.log({cart});
  return <div>
    <span className="subtitle is-1">
      Cart
      <span className="label is-large">{cart.length}</span>
    </span>
    {cart.length > 0 &&
      <button className="button is-danger is-fullwidth" onClick={() => dispatch(clearCart())}>RESET</button>
    }
    <hr />
    {cart.map(pet => <div>
      <h3 className="subtitle is-3">{pet.name} ({pet.species})</h3>
      <button onClick={() => dispatch(removePetFromCart(pet))} className="button is-large is-fullwidth is-warning">Remove</button>
      <hr />
    </div>)}
  </div>
}

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Cart)
