import React from 'react';
import Switch from "@mui/material/Switch";
import {useDispatch} from "react-redux";
import {alarmClockActions} from "../alarmClock.slice";
import IconButton from "@mui/material/IconButton";


type AlarmPropsType = {
    id: string
    time: string
    description: string
    isActive: boolean
}
export const Alarm = (props: AlarmPropsType) => {

    const dispatch = useDispatch()

    const setIsActive = () => {
        dispatch(alarmClockActions.changeIsActive({id: props.id}))
    }

    return (
        <div>
            <div>
                <span>{props.time}</span>
                <span>{props.description}</span>
                <Switch checked={props.isActive} onChange={setIsActive}/>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
            </div>
            <span>`In ${"current time - props.time"}`</span>
        </div>
    );
};

