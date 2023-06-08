import { createAsyncThunk } from '@reduxjs/toolkit'
import { Countries } from '../typedef' 

export const loadCountries = createAsyncThunk ('countries/load',async () => {
    return fetch('http://all.api.radio-browser.info/json/countries')
    .then(res => res.json())
    .then(data => (data as Countries[]))
})
