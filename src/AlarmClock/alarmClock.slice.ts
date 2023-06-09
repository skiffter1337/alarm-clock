import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'alarmClock',
    reducers: {},
    initialState: {
        alarms: [
            {
                description: "",
                time: 0,
                melody: "",
                isActive: false,
                deleteAfterTriggering: false
            }
        ]
    }
})


export const alarmClockSlice = slice.reducer