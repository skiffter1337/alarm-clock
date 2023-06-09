import React from 'react';
import Switch from "@mui/material/Switch";


export const AlarmSettings = () => {
    return (
        <div>
            <h2 className={'App'}>Settings</h2>

            <div>
                <button>X</button>
                {/*back to AlarmClock*/}
                <div>
                    <span>New alarm </span>
                    <span>in 20h 50 min</span>
                </div>
                <button>+</button>
                {/*add alarm*/}
            </div>

            <div>
                Time selection
            </div>

            <div>
                <div>
                    <span>Melody </span>
                    <span>melody selector</span>
                </div>

                <div>
                    <span>Delete after triggering</span>
                    <Switch/>
                </div>


                <div>
                    <div>Description</div>
                    <input/>
                </div>
            </div>
        </div>
    );
};

