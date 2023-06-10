import { createReducer } from "@reduxjs/toolkit"
import { setActiveStation } from "../actions/set-active-station"
import { fetchStations } from "../thunks/fetch-stations"
import { setFavouriteStation } from "../actions/set-favourite-station"
import { clearFavouriteStations } from "../actions/clear-favourite-stations"
import { Station } from "../../typedef"

type State = {
    activeCountry: any
    selectedCountries: any
    data: Station[]
    favourites: {
        [id: string]: boolean
    }
    activeStation: Station | null
}

const initialState = {
  activeCountry: {},
  selectedCountries: {},
  data: [],
  favourites: {},
  activeStation: null
} as State


export const stationsReducer = createReducer(initialState, (builder) => 
  builder 
    .addCase(fetchStations.fulfilled, (state, action) => {
        state.data = action.payload
    })
    .addCase(setFavouriteStation, (state, action) => {
        state.favourites[action.payload.id] = action.payload.value
    })
    .addCase(setActiveStation, (state, action) => {
        state.activeStation = action.payload
    })
    .addCase(clearFavouriteStations, (state) => {
        state.favourites = {}
    })
) 