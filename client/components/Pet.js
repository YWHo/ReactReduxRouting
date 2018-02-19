import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {delPet} from '../actions/pets'

function pet ({pet, dispatch}) {
  return <div>
    <h1>{pet.name}</h1>
    <button value="delete" onClick={() => dispatch(delPet(pet.id))}>Delete</button>
    <Link to={`/species/${pet.species_id}`}>{pet.species}</Link>
  </div>
}

const mapStateToProps = ({pets}, props) => ({
  pet: pets.find(pet => pet.id == props.match.params.id),
})

pet.defaultProps = {
  pet: {
    name: 'NOT FOUND'
  }
}

export default connect(mapStateToProps)(pet)
