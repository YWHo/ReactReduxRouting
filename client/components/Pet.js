import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {delPet} from '../actions/pets'
import {addPetToCart, removePetFromCart} from '../actions/cart'

function pet ({pet, cart, dispatch}) {
  return <div className="box">
    <h1 className="title is-2">{pet.name}</h1>
    <hr />
    <div className="level columns">
      <button className="column is-5 button is-large is-fullwidth is-danger" value="delete" onClick={() => dispatch(delPet(pet.id))}>Delete</button>
      <span className="column is-2"></span>
      {cart.find(cartPet => cartPet.id == pet.id)
        ? <button className="button column is-5 is-large is-fullwidth is-warning" onClick={() => dispatch(removePetFromCart(pet))}><p className="subtitle is-6">Remove from cart</p></button>
        : <button className="button column is-5 is-large is-fullwidth is-info" onClick={() => dispatch(addPetToCart(pet))}>Add to Cart</button>
      }
    </div>
    <span className="content is-large">{pet.name} is a &nbsp;
      <Link className="content is-large" to={`/species/${pet.species_id}`}>{pet.species}</Link>
    </span>
  </div>
}

const mapStateToProps = ({pets, cart}, props) => ({
  pet: pets.find(pet => pet.id == props.match.params.id),
  cart
})

pet.defaultProps = {
  pet: {
    name: 'NOT FOUND'
  }
}

export default connect(mapStateToProps)(pet)
