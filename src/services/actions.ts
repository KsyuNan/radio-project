import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Station } from '../typedef'

export const loadStation = createAsyncThunk('stations/load',async () => {
    return fetch('http://all.api.radio-browser.info/json/stations/bycountry/Ukraine')
    .then(res => res.json())
    .then(data => (data as Station[]).sort((a, b) => b.votes - a.votes))
})

export const setFavourite = createAction<{
    id: string,
    favourite: boolean
}>('station/mark-favourite')

