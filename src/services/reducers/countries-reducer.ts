import { createReducer } from "@reduxjs/toolkit";
import { CountriesSelect } from "../../typedef";
import { setActiveCountry } from "../actions/set-active-country";
import { fetchCountries } from "../thunks/fetch-countries";

type State = {
  data: CountriesSelect[];
  activeCountry: string;
};

const initialState = {
  data: [],
  activeCountry: ''
} as State;

export const countriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(setActiveCountry, (state, action) => {
      state.activeCountry = action.payload;
    });
});
