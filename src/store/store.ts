import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../services/reducers/root-reducer'

export const store = configureStore({
    reducer: rootReducer,
    devTools: true})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch