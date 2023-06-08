import {Station} from '../typedef';
import {createReducer} from "@reduxjs/toolkit";
import {loadStation, setFavourite} from "./actions";

type State = {
    all: Station[],
    favourites: {
        [id: string]:boolean
    }
}

const defaultState = {
    all: [],
    favourites: {}
}

export const stations = createReducer<State>(defaultState, builder => 
     builder
       .addCase(loadStation.fulfilled, (state, action) => {
        state.all = action.payload
       })
       .addCase(setFavourite, (state, action) => {
        state.favourites[action.payload.id] = action.payload.favourite
       })
    )