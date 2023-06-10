import { combineReducers } from "@reduxjs/toolkit";
import { stationsReducer } from './stations-reducer'
import { countriesReducer } from './countries-reducer'

export const rootReducer = combineReducers({
    stations: countriesReducer,
    countries: stationsReducer
})