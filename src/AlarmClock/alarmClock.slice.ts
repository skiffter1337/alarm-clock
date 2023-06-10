import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from 'uuid';

export type AlarmsSettingsType = {
    description: string
    time: string
    melody: string
    isActive: boolean
    deleteAfterTriggering: boolean
}

export type AlarmsType = {
    id: string
    settings: AlarmsSettingsType
}

type InitialStateType = {
    alarmSettings: AlarmsSettingsType
    alarms: AlarmsType[]
}

const slice = createSlice({
    name: 'alarmClock',
    reducers: {
        setAlarmSettings(state, action: PayloadAction<AlarmsSettingsType>) {
            state.alarmSettings = action.payload
        },
        changeAlarmSettings(state, action: PayloadAction<{id: string, newAlarmSettings: AlarmsSettingsType}>) {
            debugger
            const index = state.alarms.findIndex(a => a.id === action.payload.id)
            if (index !== -1) state.alarms[index].settings.isActive = action.payload.newAlarmSettings.isActive
        },
        changeIsActive(state, action: PayloadAction<{id: string}>) {
            const index = state.alarms.findIndex(a => a.id === action.payload.id)
            if (index !== -1) state.alarms[index].settings.isActive = !state.alarms[index].settings.isActive
        },
        addAlarm(state, action: PayloadAction<AlarmsSettingsType>) {
            const settings = action.payload
            state.alarms.push({id: v1(), settings})
        }
    },
    initialState: {
        alarmSettings: {
            description: "",
            time: "",
            melody: "",
            isActive: true,
            deleteAfterTriggering: false
        },
        alarms: [
            {
                id: v1(),
                settings: {
                    description: "Wake up",
                    time: "9:00",
                    melody: "Cock",
                    isActive: true,
                    deleteAfterTriggering: false
                }
            }
        ]
    }
})


export const alarmClockSlice = slice.reducer

export const alarmClockActions = slice.actions