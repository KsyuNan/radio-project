import { createAction } from "@reduxjs/toolkit";

export const setPlayState = createAction<boolean>('set-play')