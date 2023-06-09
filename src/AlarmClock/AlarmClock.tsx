import React from 'react';
import {Alarm} from "./Alarm/Alarm";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {NavLink} from "react-router-dom";

export const AlarmClock = () => {

    const addAlarm = () => {

    }

    return (
        <div>
            <h1 className="App">Alarm clock</h1>
            <Alarm/>
            <div>
                   <NavLink to={'/alarm-clock-settings'}>
                       <Fab color="primary" aria-label="add">
                           <AddIcon />
                       </Fab>
                    </NavLink>
            </div>
        </div>
    );
};

