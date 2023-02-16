import React, {ChangeEvent} from 'react';
import s from '../Counter2.module.css'

type InputType = {
    value: number
    callback: (value: number) => void
    setButtonSettingsDisabled: (value: boolean) => void
    valueClassNameMax: number
    valueClassNameMin: number
}

export const Input2: React.FC<InputType> = (props) => {


    const inputClassName = props.valueClassNameMin < 0 || props.valueClassNameMin >= props.valueClassNameMax ? s.inputInCorected : s.input


    const callbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(Number(e.currentTarget.value))
        props.setButtonSettingsDisabled(false)
    }

    return (
        <div>
            <input value={props.value} onChange={callbackHandler} type="number" className={inputClassName}/>
        </div>
    );
};

