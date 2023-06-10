import { createAction } from "@reduxjs/toolkit";
import { Station } from '../../typedef'

type PayloadType = {
    id: string
    value: Station[]
}

export const addSelectedCountry= createAction<PayloadType>('countries/add-selected-country')