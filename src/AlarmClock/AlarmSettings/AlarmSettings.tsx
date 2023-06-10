import React, {ChangeEvent} from 'react';
import Switch from "@mui/material/Switch";
import s from './AlarmSettings.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {alarmClockActions, AlarmsSettingsType, AlarmsType} from "../alarmClock.slice";
import {AppRootStateType} from "../../store/store";
import {SuperInput} from "../../utils/SuperInput";
import {NavLink} from "react-router-dom";


const arr = [
    {id: 1, value: 'Cock'},
    {id: 2, value: 'Space'},
    {id: 3, value: 'Nature'},
]
export const AlarmSettings = () => {

    const dispatch = useDispatch()
    const settings = useSelector<AppRootStateType, AlarmsSettingsType>(state => state.alarmClock.alarmSettings)
    const alarms = useSelector<AppRootStateType, AlarmsType[]>(state => state.alarmClock.alarms)
    console.log(alarms)

    console.log(alarms)
    const setAlarmTimeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newAlarmSettings = {...settings, time: event.currentTarget.value}
        dispatch(alarmClockActions.setAlarmSettings(newAlarmSettings))
    }
    const deleteAfterTriggeringHandler = () => {
        const newAlarmSettings = {...settings, deleteAfterTriggering: !settings.deleteAfterTriggering}
        dispatch(alarmClockActions.setAlarmSettings(newAlarmSettings))
    }

    const setAlarmMelody = (event: ChangeEvent<HTMLSelectElement>) => {
        const newAlarmSettings = {...settings, melody: event.currentTarget.value}
        dispatch(alarmClockActions.setAlarmSettings(newAlarmSettings))
    }

    const setDescription = (description: string) => {
        const newAlarmSettings = {...settings, description}
        dispatch(alarmClockActions.setAlarmSettings(newAlarmSettings))
    }

    const addAlarm = () => dispatch(alarmClockActions.addAlarm(settings))

    return (
        <>
            <h2 className={'App'}>Settings</h2>
            <div className={s.alarm_settings_container}>


                <div className={s.settings_control_panel}>

                    <NavLink to={'/'}>
                        <button>X</button>
                    </NavLink>
                    <div>
                        <span>New alarm </span>
                        <span>in 20h 50 min</span>
                    </div>
                    <NavLink to={'/'}>
                        <button onClick={addAlarm}>+</button>
                    </NavLink>
                </div>

                <div>
                    <input onChange={setAlarmTimeHandler}/>
                </div>

                <div>
                    <div className={s.melody_select}>
                        <span>Melody </span>
                        <select onChange={setAlarmMelody}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <button>Play</button>
                    </div>

                    <div>
                        <span>Delete after triggering</span>
                        <Switch onChange={deleteAfterTriggeringHandler}/>
                    </div>


                    <div>
                        <div>Description</div>
                        <SuperInput callBack={setDescription}/>
                    </div>
                </div>
            </div>
        </>
    );
};

