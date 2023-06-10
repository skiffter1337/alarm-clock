import React, {ChangeEvent, useState} from 'react';

type SuperInputType = {
    callBack: (value: string) => void
}
export const SuperInput = (props: SuperInputType) => {

    const [value, setValue] = useState("")

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        props.callBack(value)
    }

    return <input value={value} onChange={inputHandler}/>
};

