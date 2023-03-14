import React, {ChangeEvent} from 'react';
import s from '../Counter2Redux.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {buttonSettingsDisabledAC2} from '../ReduxCounter2/buttonsSettingsDisabledReducer2';
import {AppRootStateType2} from '../ReduxCounter2/store2';

type InputType = {
    value: number
    callback: (value: number) => void
}

export const Input2: React.FC<InputType> = (props) => {

    const valueClassNameMax = useSelector<AppRootStateType2, number>(state => state.maxValuePreset)
    const valueClassNameMin = useSelector<AppRootStateType2, number>(state => state.minValuePreset)
    const dispatch = useDispatch()


    const inputClassName = valueClassNameMin < 0 || valueClassNameMin >= valueClassNameMax ? s.inputInCorected : s.input


    const callbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(Number(e.currentTarget.value))
        dispatch(buttonSettingsDisabledAC2(false))
    }

    return (
        <div>
            <input value={props.value} onChange={callbackHandler} type="number" className={inputClassName}/>
        </div>
    );
};

