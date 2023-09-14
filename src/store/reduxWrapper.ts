import {configureStore} from "@reduxjs/toolkit";
import {animalReducer} from "./animalStore"

const createStore = configureStore({
    reducer: {
        animalStore: animalReducer
    }
})

// @ts-ignore
type ConfiguredStore = ReturnType<typeof createStore>
type StoreGetState = ConfiguredStore["getState"]
export type RootState = ReturnType<StoreGetState>
export type AppDispatch = ConfiguredStore["dispatch"]

export default createStore