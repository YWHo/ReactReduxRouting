import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Pets from './Pets'
import Pet from './Pet'
import Species from './Species'
import SingleSpecies from './SingleSpecies'
import AddPet from './AddPet'

import {connect} from 'react-redux'
import {getPets} from '../actions/pets'
import {getSpecies} from '../actions/species'

class App extends React.Component {
  componentDidMount() {
    console.log("mount")
    this.props.dispatch(getPets())
    this.props.dispatch(getSpecies())
  }
  render() {
    return <Router>
      <div className='app-container'>
        <h1>Hello World</h1>
        <div>
          <Link to="/pets">Pets</Link>
          <br />
          <Link to="/species">Species</Link>
        </div>
        <AddPet />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/species" component={Species} />
        <Route exact path="/species/:id" component={SingleSpecies} />
        <Route exact path="/pets/:id" component={Pet} />
      </div>
    </Router>
  }
}

export default connect()(App)
