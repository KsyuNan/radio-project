import { createAction } from "@reduxjs/toolkit";

type PayloadType = {
    id: string
    value: boolean
}

export const setFavouriteStation = createAction<PayloadType>(
    'stations/set-favourite'
)