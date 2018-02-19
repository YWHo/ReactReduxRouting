import React, {Component} from 'react'

import {connect} from 'react-redux'
import {postPet} from '../actions/pets'

class AddPet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      species_id: null,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.dispatch(postPet(this.state))
    console.log(this.state);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    const {name, species_id} = this.state
    const {species} = this.props
    return <form onSubmit={this.onSubmit}>
      <input onChange={this.onChange} type="text" name="name" value={name} />
      <select onChange={this.onChange} name="species_id" selected={species_id}>
        {species.map(specimen =>
          <option value={specimen.id}>{specimen.name}</option>
        )}
      </select>
      <input type="submit" />
    </form>
  }
}
const mapStateToProps = ({species}) => {
  return {
    species
  }
}

export default connect(mapStateToProps)(AddPet)
