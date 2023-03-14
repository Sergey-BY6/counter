import React, {ChangeEvent} from 'react';
import s from '../CounterRedux.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {buttonSettingsDisabledAC} from '../ReduxCounter/buttonSettingsDisabled';
import {AppRootStateType} from '../ReduxCounter/store';

type InputType = {
    value: number
    callback: (value: number) => void
}

export const Input: React.FC<InputType> = (props) => {

const valueClassNameMax = useSelector<AppRootStateType, number>( state => state.maxValuePreset)
const valueClassNameMin = useSelector<AppRootStateType, number>( state => state.minValuePreset)
    const dispatch = useDispatch()

    const inputClassName = valueClassNameMin < 0 || valueClassNameMin >= valueClassNameMax ? s.inputInCorected : s.input

    const callbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(Number(e.currentTarget.value))
        // props.setButtonSettingsDisabled(false)
        dispatch(buttonSettingsDisabledAC(false))
    }

    return (
        <div>
            <input value={props.value} onChange={callbackHandler} type="number" className={inputClassName}/>
        </div>
    );
};

