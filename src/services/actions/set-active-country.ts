import { createAction } from "@reduxjs/toolkit";

export const setActiveCountry = createAction<string>('country/set-active')