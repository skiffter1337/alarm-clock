import React from 'react';
import './App.css';

import {AlarmClock} from "./AlarmClock/AlarmClock";
import {AlarmSettings} from "./AlarmClock/AlarmSettings/AlarmSettings";
import {Route, Routes} from "react-router-dom";

function App() {


    return (
        <>
            <Routes>
                <Route path={'/'} element={<AlarmClock/>}/>
                <Route path={'/alarm-clock-settings'} element={<AlarmSettings/>}/>
            </Routes>
        </>
    )


}

export default App;
