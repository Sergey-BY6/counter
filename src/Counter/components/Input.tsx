import React, {ChangeEvent, useState} from 'react';
import s from "../Counter.module.css"

type InputType = {
    value: number
    callback: (value: number) => void
    setButtonSettingsDisabled: (value: boolean) => void
}

export const Input: React.FC<InputType> = (props) => {


const callbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(Number(e.currentTarget.value))
    props.setButtonSettingsDisabled(false)

}

    return (
        <div >
            <input value={props.value} onChange={callbackHandler}  type="number" className={s.input}/>
        </div>
    );
};

