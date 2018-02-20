import {combineReducers} from 'redux'

import species from './species'
import pets from './pets'
import cart from './cart'

export default combineReducers({
  species,
  pets,
  cart
})
