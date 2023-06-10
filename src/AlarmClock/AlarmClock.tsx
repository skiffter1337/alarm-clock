import React from 'react';
import {Alarm} from "./Alarm/Alarm";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {NavLink} from "react-router-dom";
import s from './AlarmClock.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {AlarmsType} from "./alarmClock.slice";

export const AlarmClock = () => {
    const alarms = useSelector<AppRootStateType, AlarmsType[]>(state => state.alarmClock.alarms)


    const mappedAlarms = alarms ? alarms.map(a => {
        return <Alarm
            key={a.id}
            id={a.id}
            time={a.settings.time}
            description={a.settings.description}
            isActive={a.settings.isActive}
        />
    })
        : <div>No alarms</div>
    return (
        <div className={s.alarm_clock_block}>
            <div className={s.alarm_clock_container}>

                {mappedAlarms}

                <div className={s.add_alarm_button}>
                    <NavLink to={'/alarm-clock-settings'}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon/>
                        </Fab>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

