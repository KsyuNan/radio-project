import { createAction } from "@reduxjs/toolkit";

export const removeFavouriteStation = createAction<string>('stations/remove-favourite')