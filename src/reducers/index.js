import { combineReducers } from 'redux'
import filters from './filters'
import games from './games'

export default combineReducers({
    games,
    filters,
  });