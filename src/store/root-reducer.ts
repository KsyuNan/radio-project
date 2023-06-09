import { combineReducers } from "@reduxjs/toolkit";
import { stations } from '../services/reducers'
import { countries } from '../services/countries-reducer'

export const rootReducer = combineReducers({
    stations,
    countries
})