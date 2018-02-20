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
      <div className='app-container section has-text-centered'>
        <h1 className="title is-1">Hello World</h1>
        <div className="columns is-mobile">
          <div className="column is-one-thirds-desktop">
            <div>
              <Link className="button is-large" to="/pets">Pets</Link>
              <Link className="button is-large" to="/species">Species</Link>
            </div>
            <div>
              <Route exact path="/pets" component={Pets} />
              <Route exact path="/species" component={Species} />
              <Route exact path="/species/:id" component={SingleSpecies} />
              <Route exact path="/pets/:id" component={Pet} />
            </div>
          </div>
          <div className="column is-4">
            <AddPet />
          </div>
          <div className="column is-4 box">
            <h1>CART HERE</h1>
          </div>
        </div>
      </div>
    </Router>
  }
}

export default connect()(App)
