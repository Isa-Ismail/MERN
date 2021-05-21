import {combineReducers} from 'redux'
import {One} from './One'
import {Two} from './Two'

const All = combineReducers({
   One,
   Two
})

export default All;