import { createAction } from "@reduxjs/toolkit";
import { Station } from '../../typedef'

export const setActiveStation = createAction<Station>('station/set-active')