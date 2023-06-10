import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {alarmClockSlice} from "../AlarmClock/alarmClock.slice";

const rootReducer = combineReducers({
    alarmClock: alarmClockSlice
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>