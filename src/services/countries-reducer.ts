import { Countries } from '../typedef'
import { createReducer } from '@reduxjs/toolkit'
import { loadCountries } from './countries'

type State = {
    all: Countries[]
}

const defaultState = {
    all: []
}

export const countries = createReducer<State>(defaultState, builder => 
     builder
       .addCase(loadCountries.fulfilled, (state, action) => {
        state.all = action.payload
       })
    )

 