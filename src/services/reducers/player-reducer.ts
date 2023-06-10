import { createReducer } from "@reduxjs/toolkit";
import { setPlayState } from "../actions/set-play-state";

interface State {
    play: boolean
}

const initialState: State = {
    play: false
}

export const playerReducer = createReducer(initialState, builder => 
      builder.addCase(setPlayState, (state, action) => {
        state.play = action.payload
      })
    )